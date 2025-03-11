import { appName } from "../config/config.js";
import { userPanelKeyboardReplyMarkup } from './../keyboards/replykeyboard.js';

export const startCommand = (ctx) => {
    let text = `به ربات کانفیگ ${appName} خوش آمدید . \n`
    console.log(ctx.chat, ctx.from);

    ctx.reply(text, userPanelKeyboardReplyMarkup(ctx));

}

