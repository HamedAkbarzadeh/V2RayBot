export function showV2rayForm(configInsertData) {
    return `
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
    تاریخ انقضا : ${configInsertData.expriredAt}
    `;
}