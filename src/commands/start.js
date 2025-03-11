import { appName } from "../config/config.js";
import { saveStep, showLrange } from "../services/redis.js";
import { userPanelKeyboardReplyMarkup } from './../keyboards/replykeyboard.js';

export const startCommand = (ctx) => {
    //setup step
    saveStep(ctx.user.userID, "home")
    showLrange(ctx.user.userID)
    let text = `به ربات کانفیگ ${appName} خوش آمدید . \n`;
    ctx.reply(text, userPanelKeyboardReplyMarkup(ctx));

}

