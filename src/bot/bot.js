import { Telegraf } from "telegraf";
import { token } from "../config/config.js";
import { startCommand } from "../commands/start.js";
import { auth } from '../handlers/create-user/createUser.js';
import { accountInfo } from "../handlers/user-panel/account/account-info.js";
import { adminPanel } from "../handlers/admin-panel/index.js";

export const bot = new Telegraf(token);

export const setupBot = async () => {
    bot.use(auth);

    bot.start(startCommand);
    //user-panel
    bot.hears("حساب کاربری", accountInfo);
    // bot.hears("خرید کانفیگ", accountInfo);

    //admin-panel
    bot.hears("ادمین پنل", adminPanel)

    bot.launch()
}
