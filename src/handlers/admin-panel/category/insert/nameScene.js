import { cateNameScene } from "../../../../services/Scenes/mainScenes.js";
import { cancelInlineKeyboard, cancelWithSkipInlineKeyboard } from "../../../../keyboards/inlinekeyboard.js";

cateNameScene.enter(async (ctx) => {
    ctx.session.cateData = {
        name: "",
        description: "",
    }
    const text = 'لطفا عنوان برای دسته بندی وارد نمایید .';
    await ctx.reply(text, cancelInlineKeyboard());
})
cateNameScene.on("text", async (ctx) => {
    ctx.session.cateData.name = ctx.text;
    await ctx.reply("لطفا توضیحات برای دسته بندی وارد نمایید .(اختیاری)", cancelWithSkipInlineKeyboard())
    await ctx.scene.enter("cateDescriptionScene");
})