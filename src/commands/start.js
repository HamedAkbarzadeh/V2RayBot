import { appName } from "../config/config.js";
import { redisSaveStep } from "../services/redis.js";
import { userPanelKeyboardReplyMarkup } from './../keyboards/replykeyboard.js';

export const startCommand = (ctx) => {
    //setup step
    redisSaveStep(ctx.user.userID, "home")

    let text = `به ربات کانفیگ ${appName} خوش آمدید . \n`;
    ctx.reply(text, userPanelKeyboardReplyMarkup(ctx));

}

