import {
    configDescriptionScene,
    configNameScene,
    configExpiredAtScene,
    configPriceScene,
    configNetVolumeScene,
    configUserUsedScene,
    configRegionScene,
    configSpeedScene,
    configLinkScene,
    configStatusScene,
    configTypeScene
} from "../../../services/configScene.js";
import v2rayModel from "../../../model/v2ray.js";
import { cancelInlineKeyboard } from "../../../keyboards/inlinekeyboard.js";
import { showV2rayForm } from "../../../utils/helper.js";


export const v2rayConfigInsert = async (ctx) => {
    await ctx.scene.enter("configNameScene");
}

// config name setup
configNameScene.enter(async (ctx) => {
    ctx.session.configInsertData = {
        name: "",
        description: "",
        type: "",
        status: "",
        price: "",
        link: "",
        speed: "",
        region: "",
        userUsed: "",
        netVolume: "",
        exprired_at: ""
    };
    await ctx.reply("لطفا نام کانفیگ را وارد کنید", cancelInlineKeyboard());

});
configNameScene.on("text", async (ctx) => {
    ctx.session.configInsertData.name = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`توضیحات برای این کانفیگ وارد نمایید : `, cancelInlineKeyboard());
    await ctx.scene.enter("configDescriptionScene");
})

//config description setup
configDescriptionScene.on("text", async (ctx) => {
    ctx.session.configInsertData.description = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`نوع کانفیگ رو انتخاب کنید . (فقط عددش را وارد نمایید.)
        ۱- یک دونه کانفیگ داخل این لینک هست 
        ۲- گروهی از کانفیگ ها داخل این لینک هست
        `, cancelInlineKeyboard());
    await ctx.scene.enter("configTypeScene");
})

//config type setup
configTypeScene.on("text", async (ctx) => {

    if ( isNaN(Number(ctx.text)) || ( ctx.text != 1 && ctx.text != 2 ) ) {
        return await ctx.reply("لطفا فقط عدد وارد نمایید : (۱ یا ۲)", cancelInlineKeyboard());
    }
    if ( ctx.text == 1 ) {
        ctx.session.configInsertData.type = "SINGLE_CONFIG";
    } else {
        ctx.session.configInsertData.type = "GROUP_CONFIG";
    }
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`وضعیت کانفیگ را انتخاب کنید :
    ۱- فعال
    ۲- غیر فعال
    `, cancelInlineKeyboard());
    await ctx.scene.enter("configStatusScene");
})
configStatusScene.on("text", async (ctx) => {
    if ( isNaN(Number(ctx.text)) || ( ctx.text != 1 && ctx.text != 2 ) ) {
        return await ctx.reply("لطفا فقط عدد وارد نمایید : (۱ یا ۲)", cancelInlineKeyboard());
    }
    if ( ctx.text == 1 ) {
        ctx.session.configInsertData.status = "ACTIVE";
    } else {
        ctx.session.configInsertData.status = "INACTIVE";
    }
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`قیمت کانفیگ را وارد نمایید : `, cancelInlineKeyboard());
    await ctx.scene.enter("configPriceScene");
});
configPriceScene.on("text", async (ctx) => {
    if ( isNaN(parseFloat(ctx.text)) ) {
        return ctx.reply("لطفا فقط عدد وارد نمایید", cancelInlineKeyboard());
    }
    ctx.session.configInsertData.price = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`لینک دانلود کانفیگ را وارد نمایید : `, cancelInlineKeyboard());
    await ctx.scene.enter("configLinkScene");
})
configLinkScene.on("text", async (ctx) => {
    ctx.session.configInsertData.link = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`سرعت کانفیگ را وارد نمایید : `, cancelInlineKeyboard());
    await ctx.scene.enter("configSpeedScene");
})
configSpeedScene.on("text", async (ctx) => {
    ctx.session.configInsertData.speed = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`ریجن کانفیگ را وارد نمایید : `, cancelInlineKeyboard());
    await ctx.scene.enter("configRegionScene");
})
configRegionScene.on("text", async (ctx) => {
    ctx.session.configInsertData.region = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`تعداد کاربران کانفیگ را وارد نمایید : `, cancelInlineKeyboard());
    await ctx.scene.enter("configUserUsedScene");
})
configUserUsedScene.on("text", async (ctx) => {
    ctx.session.configInsertData.userUsed = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`میزان حجم نت کانفیگ را وارد نمایید : `, cancelInlineKeyboard());
    await ctx.scene.enter("configNetVolumeScene");
})
configNetVolumeScene.on("text", async (ctx) => {
    ctx.session.configInsertData.netVolume = ctx.text;
    await ctx.reply(showV2rayForm(ctx.session.configInsertData))
    await ctx.reply(`مدت اعتبار کانفیگ را به واحد روز وارد نمایید :  
        مثلا :‌۱۰ یا ۳۰ یا ...`, cancelInlineKeyboard());
    await ctx.scene.enter("configExpiredAtScene");
});
configExpiredAtScene.on("text", async (ctx) => {
    try {


        if ( isNaN(Number(ctx.text)) ) {
            return ctx.reply("لطفا فقط عدد وارد نمایید");
        }
        ctx.session.configInsertData.exprired_at = ctx.text;
        await ctx.reply(showV2rayForm(ctx.session.configInsertData))
        //code for insert data to database

        const v2ray = await v2rayModel.create(ctx.session.configInsertData);

        ctx.reply("اطلاعات کانفیگ ثبت شد");

        await ctx.scene.leave();
    } catch ( error ) {
        console.log(error);
        await ctx.reply("خطا در ثبت اطلاعات");
    }
})
