import { redisSaveStep } from "../../../services/redis.js";
import { categoryManageKeyboardReplyMarkup } from "../../../keyboards/replykeyboard.js";

export const categoryManage = async (ctx) => {
    redisSaveStep(ctx.user.userID, "categoryManage");
    const text = 'لطفا برای ادامه فرایند یکی از گزیینه های زیر را انتخاب کنید .';
    await ctx.reply(text, categoryManageKeyboardReplyMarkup(ctx));
}