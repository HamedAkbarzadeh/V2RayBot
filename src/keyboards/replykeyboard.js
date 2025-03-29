import { Markup } from "telegraf"


//** user-panel **\\
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
    if ( ctx.user.isAdmin ) {
        replyMarkUp.push(['ادمین پنل']);
    }
    return Markup.keyboard(replyMarkUp).resize();
}

//** admin-panel **\\
export const adminPanelKeyboardReplyMarkup = (ctx) => {
    let replyMarkUp = [
        ['مدیریت کانفیگ ها'],
        ['مدیریت سفارشات'],
        ['مدیریت دسته بندی'],
        ['بازگشت']
    ];
    return Markup.keyboard(replyMarkUp).resize();
}

export const v2rayConfigManageKeyboardReplyMarkup = (ctx) => {
    let replyMarkUp = [
        ['ویرایش کانفیگ', 'افزودن کانفیگ'],
        ['نمایش تمام کانفیگ ها', 'حذف کانفیگ'],
        ["بازگشت"],
    ]
    return Markup.keyboard(replyMarkUp).resize();
}
export const categoryManageKeyboardReplyMarkup = (ctx) => {
    const replyMarkUp = [
        ['افزودن دسته بندی'],
        ['نمایش و حذف دسته بندی'],
        ['بازگشت']
    ]
    return Markup.keyboard(replyMarkUp).resize();
}