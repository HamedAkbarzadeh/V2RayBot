import { adminPanelKeyboardReplyMarkup } from "../../keyboards/replykeyboard.js";
import { goBackStep, saveStep, showLrange } from "../../services/redis.js";

export const adminPanel = async (ctx) => {
    saveStep(ctx.user.userID, "adminPanel");

    showLrange(ctx.user.userID);

    const text = ` به پنل ادمین خوش آمدید . 
    لطفا جهت ادامه فرایند یکی از دکمه ها را انتخاب نمایید .
    `;
    ctx.reply(text, adminPanelKeyboardReplyMarkup(ctx))
}