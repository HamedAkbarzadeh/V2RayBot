import { adminPanelKeyboardReplyMarkup } from "../../keyboards/replykeyboard.js";

export const adminPanel = (ctx) => {
    const text = ` به پنل ادمین خوش آمدید . 
    لطفا جهت ادامه فرایند یکی از دکمه ها را انتخاب نمایید .
    `;
    ctx.reply(text, adminPanelKeyboardReplyMarkup(ctx))
}