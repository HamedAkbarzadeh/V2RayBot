
export const accountInfo = (ctx) => {
    const text = `*🧾 اطلاعات حساب شما *

    🔰 شناسه کاربری : ${ctx.user.userID}
    👤 اسم : [${ctx.user.fname}](tg://user?id=${ctx.user.userID})
    💰 موجودی : ${ctx.user.balance} تومان
    `;
    ctx.reply(text, { parse_mode: "MarkdownV2" });
    // ☑️ کل سرویس ها : ${}

}