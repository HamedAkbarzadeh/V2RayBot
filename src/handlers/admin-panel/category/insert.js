import { cancelInlineKeyboard, cancelWithSkipInlineKeyboard } from "../../../keyboards/inlinekeyboard.js";
import { cateNameScene, cateDescriptionScene, cateStatusScene } from "../../../services/Scenes/mainScenes.js";
import categoryModel from "../../../model/category.js";

export const addCategory = async (ctx) => {
    try {
        // بررسی وجود ctx.scene
        if ( !ctx.scene ) {
            throw new Error('Scene middleware not initialized!');
        }
        ctx.session.currentFlow = 'createCategoryScene';
        await ctx.scene.enter("cateNameScene");
    } catch ( error ) {
        await ctx.reply('خطایی در شروع فرآیند رخ داد!');
    }
    // console.log(cateNameScene);

    // await ctx.scene.enter("cateNameScene");
}

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