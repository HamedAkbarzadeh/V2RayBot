export const cancelMiddleware = async (ctx, next) => {
    let callback_data;
    try {
        if ( typeof ctx.callbackQuery != "undefined" )
            callback_data = ctx.callbackQuery.data;

        if ( callback_data === 'CANCEL' ) {
            const currentScene = ctx.scene.current?.id;
            console.log(currentScene);
            if ( currentScene ) {
                await ctx.reply("عملیات لغو شد.");
                await ctx.scene.leave();
            }
        }
        await next();
    } catch ( e ) {
        await ctx.reply('امکان کنسل کردن نیست.');
    }
}