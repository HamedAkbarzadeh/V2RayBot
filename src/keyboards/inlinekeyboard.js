import { Markup } from "telegraf"

export const cancelInlineKeyboard = () => {
    return Markup.inlineKeyboard([
        [{ text: "لغو", callback_data: "cancel" }]
    ]);
}
export const cancelWithSkipInlineKeyboard = () => {
    return Markup.inlineKeyboard([
        [{ text: "لغو", callback_data: "cancel" }],
        [{ text: "رد کردن", callback_data: "skip" }],
    ])
}