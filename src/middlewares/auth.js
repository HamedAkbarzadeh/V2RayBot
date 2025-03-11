import User from "../model/user.js"
export const auth = async (ctx, next) => {
    let user = await User.findOne({ userID: ctx.from.id });
    if (user) {
        ctx.user = user;
    } else {
        //create User
        user = await User.create({

        })
    }
    next();
}