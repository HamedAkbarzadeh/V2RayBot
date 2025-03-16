import { session, Telegraf } from "telegraf";
import { token } from "../config/config.js";
import { startCommand } from "../commands/start.js";
import { accountInfo } from "../handlers/user-panel/account/account-info.js";
import { adminPanel } from "../handlers/admin-panel/adminPanel.js";
import { auth, isAdmin } from "../middlewares/auth.js";
import {
  redisGoBackStep,
  redisGetStep,
} from "../services/redis.js";
import { v2RayManage } from "../handlers/admin-panel/v2ray-config/v2ray-manage.js";
import { v2rayConfigInsert } from "../handlers/admin-panel/v2ray-config/v2ray-insert.js";
import { insertConfigStage } from "../services/scene.js";

export const bot = new Telegraf(token);
bot.use(session());
bot.use(insertConfigStage.middleware());

export const setupBot = async () => {
  bot.use(auth);

  //back button
  bot.hears("بازگشت", async (ctx) => {
    redisGoBackStep(ctx.user.userID, ctx);
    const step = await redisGetStep(ctx.user.userID);

    switch (step) {
      case "home":
        startCommand(ctx);
        break;
      case "adminPanel":
        adminPanel(ctx)
        break;
      case "v2rayManage":
        v2RayManage(ctx);
        break;
      case "accountInfo":
        accountInfo(ctx);
        break;
      default:
        startCommand(ctx);
        break;
    }
  });
  bot.start(startCommand);
  //user-panel
  bot.hears("حساب کاربری", accountInfo);
  // bot.hears("خرید کانفیگ", accountInfo);

  //#### admin-panel Section ####\\
  bot.use(isAdmin);
  bot.hears("ادمین پنل", adminPanel);
  //** v2ray-config management **/
  bot.hears("مدیریت کانفیگ ها", v2RayManage);
  bot.hears("افزودن کانفیگ", v2rayConfigInsert);
  // bot.hears("افزودن کانفیگ", (ctx) => {


  // })
  bot.launch();
};
