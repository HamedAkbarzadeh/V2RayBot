import { configDescriptionScene, configNameScene, configExpiredAtScene, configPriceScene, configNetVolumeScene, configUserUsedScene, configRegionScene, configSpeedScene, configLinkScene, configStatusScene, configTypeScene } from "../../../services/scene.js";
import v2rayModel from "../../../model/v2ray.js";

export const v2rayConfigInsert = async (ctx) => {
    await ctx.scene.enter("configNameScene");
}

// config name setup
configNameScene.enter((ctx) => {
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
    ctx.reply("لطفا نام کانفیگ را وارد کنید");
});
configNameScene.on("text", async (ctx) => {
    ctx.session.configInsertData.name = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`توضیحات برای این کانفیگ وارد نمایید : `);
    await ctx.scene.enter("configDescriptionScene");
})

//config description setup
configDescriptionScene.on("text", async (ctx) => {
    ctx.session.configInsertData.description = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`نوع کانفیگ رو انتخاب کنید . (فقط عددش را وارد نمایید.)
        ۱- یک دونه کانفیگ داخل این لینک هست 
        ۲- گروهی از کانفیگ ها داخل این لینک هست
        `);
    await ctx.scene.enter("configTypeScene");
})

//config type setup
configTypeScene.on("text", async (ctx) => {

    if (isNaN(Number(ctx.text)) || (ctx.text != 1 && ctx.text != 2)) {
        return ctx.reply("لطفا فقط عدد وارد نمایید : (۱ یا ۲)");
    }
    if (ctx.text == 1) {
        ctx.session.configInsertData.type = "SINGLE_CONFIG";
    } else {
        ctx.session.configInsertData.type = "GROUP_CONFIG";
    }
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`وضعیت کانفیگ را انتخاب کنید :
    ۱- فعال
    ۲- غیر فعال
    `);
    await ctx.scene.enter("configStatusScene");
})
configStatusScene.on("text", async (ctx) => {
    if (isNaN(Number(ctx.text)) || (ctx.text != 1 && ctx.text != 2)) {
        return ctx.reply("لطفا فقط عدد وارد نمایید : (۱ یا ۲)");
    }
    if (ctx.text == 1) {
        ctx.session.configInsertData.status = "ACTIVE";
    } else {
        ctx.session.configInsertData.status = "INACTIVE";
    }
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`قیمت کانفیگ را وارد نمایید : `);
    await ctx.scene.enter("configPriceScene");
});
configPriceScene.on("text", async (ctx) => {
    if (isNaN(parseFloat(ctx.text))) {
        return ctx.reply("لطفا فقط عدد وارد نمایید");
    }
    ctx.session.configInsertData.price = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`لینک دانلود کانفیگ را وارد نمایید : `);
    await ctx.scene.enter("configLinkScene");
})
configLinkScene.on("text", async (ctx) => {
    ctx.session.configInsertData.link = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`سرعت کانفیگ را وارد نمایید : `);
    await ctx.scene.enter("configSpeedScene");
})
configSpeedScene.on("text", async (ctx) => {
    ctx.session.configInsertData.speed = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`ریجن کانفیگ را وارد نمایید : `);
    await ctx.scene.enter("configRegionScene");
})
configRegionScene.on("text", async (ctx) => {
    ctx.session.configInsertData.region = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`تعداد کاربران کانفیگ را وارد نمایید : `);
    await ctx.scene.enter("configUserUsedScene");
})
configUserUsedScene.on("text", async (ctx) => {
    ctx.session.configInsertData.userUsed = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`میزان حجم نت کانفیگ را وارد نمایید : `);
    await ctx.scene.enter("configNetVolumeScene");
})
configNetVolumeScene.on("text", async (ctx) => {
    ctx.session.configInsertData.netVolume = ctx.text;
    ctx.reply(insertFormData(ctx.session.configInsertData))
    ctx.reply(`مدت اعتبار کانفیگ را به واحد روز وارد نمایید :  
        مثلا :‌۱۰ یا ۳۰ یا ...`);
    await ctx.scene.enter("configExpiredAtScene");
});
configExpiredAtScene.on("text", async (ctx) => {
    try {


        if (isNaN(Number(ctx.text))) {
            return ctx.reply("لطفا فقط عدد وارد نمایید");
        }
        ctx.session.configInsertData.exprired_at = ctx.text;
        ctx.reply(insertFormData(ctx.session.configInsertData))
        //code for insert data to database

        const v2ray = await v2rayModel.create(ctx.session.configInsertData);

        ctx.reply("اطلاعات کانفیگ ثبت شد");

        ctx.scene.leave();
    } catch (error) {
        console.log(error);
        ctx.reply("خطا در ثبت اطلاعات");
    }
})

function insertFormData(configInsertData) {
    return `اطلاعاتی که تا کنون وارد کردید : 
    نام : ${configInsertData.name}
    توضیحات : ${configInsertData.description}
    تایپ : ${configInsertData.type}
    وضعیت : ${configInsertData.status}
    قیمت : ${configInsertData.price}
    لینک : ${configInsertData.link}
    سرعت : ${configInsertData.speed}
    ریجن : ${configInsertData.region}
    تعداد کاربران : ${configInsertData.userUsed}
    میزان حجم نت : ${configInsertData.netVolume}
    تاریخ انقضا : ${configInsertData.exprired_at}
    `;
}