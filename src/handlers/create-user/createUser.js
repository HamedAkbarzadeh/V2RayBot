import { botUsername } from "../../config/config.js";
import { model as User } from "../../model/user.js"

export async function auth(ctx, next) {

    let user = await User.findOne({ userID: ctx.from.id });
    if (!user) {
        try {
            user = new User({
                userID: ctx.from.id,
                fname: ctx.chat.first_name,
                lname: ctx.chat.last_name,
                username: ctx.chat.username,
                step: "home",
                invite_link: `${botUsername}?start=${ctx.from.id}`,
            });
            const inviteBy = ctx.text.split(" ")[1];
            if (inviteBy) {
                user.invite_by_user_id = inviteBy;
            }
            await user.save();

        } catch (error) {
            ctx.reply("مشکلی در برنامه رخ داده اکانت شما ساخته نشد . لطفا دوباره تلاش نمایید و یا به پشتیبانی پیام دهید .");
        }
    }
    if (user)
        ctx.user = user;
    next();
}
