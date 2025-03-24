import v2rayModel from "../../../../model/v2ray.js"
export const configList = async (ctx) => {
    //get configs from v2rayModel
    const v2rayList = await v2rayModel.find({ status: "ACTIVE" });
    //validate is Empty
    if (typeof v2rayList[0] == "undefined")
        return await ctx.reply("هیچ کانفیگ قعالی موجود نیست .");

    //show all v2ray in inline_keyboard
    let inlineKeyboard = [];
    for (v2rayList in i) {
        console.log(v2rayList[i]);
        inlineKeyboard[i] = [{ text: v2rayList[i].name, callback_data: `v2ray_list_${v2rayList[i]._id}` }]
    }
    await ctx.reply("لطفا یکی از کانفیگ های زیر را انتخاب نمایید .", {
        inline_keyboard: inlineKeyboard
    })

}