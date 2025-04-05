import v2rayModel from "../../../model/v2ray.js"
import { deleteConfigScene, selectConfigScene, confirmDeleteConfigScene } from "../../../services/Scenes/mainScenes.js";

export const showAllConfig = async (ctx) => {
    await ctx.scene.enter("selectConfigScene");
}

selectConfigScene.enter(async (ctx) => {
    const v2raies = await v2rayModel.find();
    if ( v2raies[0] == undefined )
        return ctx.reply("هیچ کانفیگی موجود نیست .")

    v2raies.map((v2ray) => {
        ctx.reply(showV2ray(v2ray), {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "ویرایش", callback_data: `v2ray_edit_${ v2ray._id }` }, {
                        text: "حذف",
                        callback_data: `v2ray_delete_${ v2ray._id }`
                    }]
                ]
            }
        })
    })
    await ctx.scene.enter("confirmDeleteConfigScene");
})
confirmDeleteConfigScene.action(/^v2ray_delete_(\d+)/, async (ctx) => {
    const itemID = ctx.match.input.split("_")[2];
    ctx.editMessageText("آیا مطمئنید که میخواهید حذف کنید؟", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "بله", callback_data: `v2ray_delete_accept_${ itemID }` },
                    { text: "خیر", callback_data: "v2ray_delete_denied" }
                ]
            ]
        }
    })
    await ctx.scene.enter("deleteConfigScene");

})
deleteConfigScene.action(/^v2ray_delete_denied/, async (ctx) => {
    await ctx.reply("با موفقیت کنسل شد .");
    ctx.scene.leave();
});
deleteConfigScene.action(/^v2ray_delete_accept_(\d+)/, async (ctx) => {
    await ctx.answerCbQuery("درحال حذف کانفیگ ...")
    const itemID = ctx.match.input.split("_")[3];
    let text;
    try {
        const res = await v2rayModel.deleteOne({ _id: itemID });
        text = "کانفیگ مورد نظر با موفقیت حذف شد ."
    } catch ( error ) {
        text = "مشکلی در حذف کانفیگ رخ داده لطفا بعدا تلاش نمایید .";
    }
    await ctx.reply(text || "وضعیت نا معلوم",);
    ctx.scene.leave();
})

function showV2ray(configData) {
    return `اطلاعاتی که تا کنون وارد کردید : 
    نام : ${ configData.name }
    توضیحات : ${ configData.description }
    تایپ : ${ configData.type }
    وضعیت : ${ configData.status }
    قیمت : ${ configData.price }
    لینک : ${ configData.link }
    سرعت : ${ configData.speed }
    ریجن : ${ configData.region }
    تعداد کاربران : ${ configData.usersUsed }
    میزان حجم نت : ${ configData.netVolume }
    تاریخ انقضا : ${ configData.expired_at }
    `;
}