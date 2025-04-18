import { v2rayConfigManageKeyboardReplyMarkup } from "../../../keyboards/replykeyboard.js";
import { redisSaveStep } from "../../../services/redis.js";


export const manage = (ctx) => {
    redisSaveStep(ctx.user.userID, "v2rayManage");
    const text = "صفحه مدیریت کانفیگ ها . لطفا برای ادامه فرایند یکی از گزیینه های زیر را انتخاب نمایید ."
    ctx.reply(text, v2rayConfigManageKeyboardReplyMarkup(ctx))
};
