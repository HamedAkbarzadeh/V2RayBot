import { Markup } from "telegraf"

export const cancelInlineKeyboard = () => {
    return Markup.inlineKeyboard([
        [{ text: 'لغو', callback_data: 'CANCEL' }]
    ]);
}
export const cancelWithSkipInlineKeyboard = () => {
    return Markup.inlineKeyboard([
        [{ text: 'لغو', callback_data: 'CANCEL' }],
        [{ text: 'رد کردن', callback_data: 'SKIP' }],
    ])
}