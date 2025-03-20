import { Markup } from "telegraf"

export const cancelInlineKeyboard = () => {
    return Markup.inlineKeyboard([
        [{ text: "لغو", callback_data: "cancel" }]
    ]);
}