import v2rayModel from "../../../../model/v2ray.js"
import { showV2rayForm } from "../../../../utils/helper.js";
export const configList = async (ctx) => {
    //get configs from v2rayModel
    const v2rayList = await v2rayModel.find({ status: "ACTIVE" });
    //validate is Empty
    if (typeof v2rayList[0] == "undefined")
        return await ctx.reply("هیچ کانفیگ قعالی موجود نیست .");

    //show all v2ray in inline_keyboard
    let inlineKeyboard = [];
    for (let i in v2rayList) {
        inlineKeyboard.push([
            {
                text: v2rayList[i].name,
                callback_data: `buy_v2ray_list_${v2rayList[i]._id}`
            }
        ])
    }
    await ctx.reply("لطفا یکی از کانفیگ های زیر را انتخاب نمایید .", {
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    })
}
export const selectedConfigForBuy = async (ctx) => {
    const configID = ctx.match.input.split("_")[3];

    const config = await v2rayModel.findById(configID);

    await ctx.reply(showV2rayForm(config), {
        reply_markup: {
            inline_keyboard: [{ text: "خرید", callback_data: "buy" }]
        }
    });
}