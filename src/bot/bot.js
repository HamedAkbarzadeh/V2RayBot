import { Telegraf } from "telegraf";
import { token } from "../config/config.js";
import { startCommand } from "../commands/start.js";
import { accountInfo } from "../handlers/user-panel/account/account-info.js";
import { adminPanel } from "../handlers/admin-panel/adminPanel.js";
import { auth, isAdmin } from "../middlewares/auth.js"
import { redisGoBackStep, redisGetStep, redisShowLrange } from "../services/redis.js";

export const bot = new Telegraf(token);

export const setupBot = async () => {
    bot.use(auth);

    bot.hears("بازگشت", async (ctx) => {
        redisGoBackStep(ctx.user.userID, ctx);
        const step = await redisGetStep(ctx.user.userID);
        if (step == "home") {
            startCommand(ctx);
        }
    });
    bot.start(startCommand);
    //user-panel
    bot.hears("حساب کاربری", accountInfo);
    // bot.hears("خرید کانفیگ", accountInfo);

    bot.use(isAdmin);
    //admin-panel
    bot.hears("ادمین پنل", adminPanel)

    bot.launch()
}
