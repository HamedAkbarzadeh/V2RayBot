import { adminPanelKeyboardReplyMarkup } from "../../keyboards/replykeyboard.js";
import { redisSaveStep } from "../../services/redis.js";

export const adminPanel = async (ctx) => {
    redisSaveStep(ctx.user.userID, "adminPanel");

    const text = ` به پنل ادمین خوش آمدید . 
    لطفا جهت ادامه فرایند یکی از دکمه ها را انتخاب نمایید .
    `;
    ctx.reply(text, adminPanelKeyboardReplyMarkup(ctx))
}