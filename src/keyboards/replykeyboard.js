import { Markup } from "telegraf"

export const userPanelKeyboardReplyMarkup = (ctx) => {
    let replyMarkUp = [
        ['کانفیگ های من', 'خرید کانفیگ'],
        ['دریافت اکانت تست'],
        ['ارسال رسید - شارژ کیف پول'],
        ['زیر مجموعه گیری', 'حساب کاربری'],
        ['اموزش اتصال', 'تیکت های من'],
        ['مشخصات کانفیگ ها'],
        ['ارتباط با پشتیبانی', 'کانال ما'],
    ];
    if (ctx.user.isAdmin) {
        replyMarkUp.push(['ادمین پنل']);
    }
    return Markup.keyboard(replyMarkUp).resize()
}