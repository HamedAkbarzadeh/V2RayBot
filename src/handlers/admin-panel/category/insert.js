import { cancelInlineKeyboard, cancelWithSkipInlineKeyboard } from "../../../keyboards/inlinekeyboard.js";
import { cateNameScene, cateDescriptionScene, cateStatusScene } from "../../../services/Scenes/mainScenes.js";
import categoryModel from "../../../model/category.js";

export const addCategory = async (ctx) => {
    try {
        // بررسی وجود ctx.scene
        if ( !ctx.scene ) {
            console.log("scene", ctx.scene)
            throw new Error('Scene middleware not initialized!');
        }
        console.log("cate Scene : ", cateNameScene)
        await ctx.scene.enter("cateNameScene");
    } catch ( error ) {
        console.error('Error in addCategory:', error);
        await ctx.reply('خطایی در شروع فرآیند رخ داد!');
    }
    // console.log(cateNameScene);

    // await ctx.scene.enter("cateNameScene");
}
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
cateDescriptionScene.on("text", async (ctx) => {
    ctx.session.cateData.description = ctx.text;

    await ctx.reply('لطفا وضعیت این دسته بندی رو مشخص کنید ', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'فعال', callback_data: "ENABLE" },
                    { text: 'غیر فعال', callback_data: "DISABLE" }
                ],
                [
                    { text: 'لغو', callback_data: "cancel" }
                ]
            ]
        }
    });
    await ctx.scene.enter("cateStatusScene");
})
cateStatusScene.action(/^(ENABLE|DISABLE)$/, async (ctx) => {
    ctx.session.cateData.status = ctx.callbackQuery.data;
    try {
        const category = await categoryModel.create(ctx.session.cateData);
        await ctx.reply("اطلاعات با موفقیت ثبت شد.");
    } catch ( e ) {
        await ctx.reply("خطا در ذخیره سازی اطلاعات . لطفا بعدا تلاش نمایید.");
    }
    await ctx.scene.leave();
})