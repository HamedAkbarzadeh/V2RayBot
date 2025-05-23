import { session, Telegraf } from "telegraf";
import { token } from "../config/config.js";
import { startCommand } from "../commands/start.js";
import { accountInfo } from "../handlers/user-panel/account/account-info.js";
import { adminPanel } from "../handlers/admin-panel/adminPanel.js";
import { auth, isAdmin } from "../middlewares/auth.js";
import { redisGetStep, redisGoBackStep, } from "../services/redis.js";
import { manage } from "../handlers/admin-panel/v2ray-config/manage.js";
import { v2rayConfigInsert } from "../handlers/admin-panel/v2ray-config/insert.js";
import { mainStage } from "../services/Scenes/mainScenes.js";
import { showAllConfig } from "../handlers/admin-panel/v2ray-config/show.js";
import { configList, selectedConfigForBuy } from "../handlers/user-panel/v2ray-config/buy-config/buyConfig.js";
import { addCategory } from "../handlers/admin-panel/category/insert.js";
import { categoryManage } from "../handlers/admin-panel/category/manage.js";

export const bot = new Telegraf(token);

export const setupBot = async () => {
    bot.use(session());
    bot.use(mainStage.middleware());

    bot.use(auth);

    //back button
    bot.hears("بازگشت", async (ctx) => {
        redisGoBackStep(ctx.user.userID, ctx);
        const step = await redisGetStep(ctx.user.userID);

        switch ( step ) {
            case "home":
                startCommand(ctx);
                break;
            case "adminPanel":
                adminPanel(ctx)
                break;
            case "v2rayManage":
                manage(ctx);
                break;
            case "accountInfo":
                accountInfo(ctx);
                break;
            case "categoryManage":
                categoryManage(ctx);
                break;
            default:
                startCommand(ctx);
                break;
        }
    });
    bot.start(startCommand);
    //#### user-panel ####\\
    bot.hears("حساب کاربری", accountInfo);
    bot.hears("خرید کانفیگ", configList);
    bot.action(/^buy_v2ray_list_(\d+)/, selectedConfigForBuy);
    //#### admin-panel Section ####\\
    bot.use(isAdmin);
    bot.hears("ادمین پنل", adminPanel);
    //** v2ray-config management **/
    bot.hears("مدیریت کانفیگ ها", manage);
    bot.hears("افزودن کانفیگ", v2rayConfigInsert);
    bot.hears("نمایش تمام کانفیگ ها", showAllConfig);

    //** v2ray-config category **/
    bot.hears('مدیریت دسته بندی', categoryManage)
    bot.hears("افزودن دسته بندی", addCategory);


    bot.launch();
};

