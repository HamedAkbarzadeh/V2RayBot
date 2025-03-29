import { cancelInlineKeyboard, cancelWithSkipInlineKeyboard } from "../../../keyboards/inlinekeyboard.js";
import { nameScene, descriptionScene } from "../../../services/Scenes/category.js";
import categoryModel from "../../../model/category.js";

export const addCategory = async (ctx) => {
    const text = 'لطفا عنوان برای دسته بندی وارد نمایید .';
    await ctx.reply(text, cancelInlineKeyboard());
    await ctx.scene.enter("nameScene");
}
nameScene.enter(async (ctx) => {
    ctx.session.cateName = ctx.text;
    await ctx.reply("لطفا توضیحات برای دسته بندی وارد نمایید .(اختیاری)", cancelWithSkipInlineKeyboard())
    await ctx.scene.enter("descriptionScene");
})
descriptionScene.enter(async (ctx) => {
    ctx.session.cateDescription = ctx.text;
    try {
        const category = await categoryModel.create({
            name: ctx.session.cateName,
            description: ctx.text,
        });
        await ctx.reply("اطلاعات با موفقیت ثبت شد.");
    } catch ( e ) {
        await ctx.reply("خطا در ذخیره سازی اطلاعات . لطفا بعدا تلاش نمایید.");
    }
    await ctx.scene.leave();
})