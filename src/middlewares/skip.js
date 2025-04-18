import flows from '../services/Scenes/sceneFlow.js'
  
export const skipMiddleware = async (ctx, next) => {
    try {
        if ( ctx.callbackQuery?.data === 'SKIP' ) {
            await ctx.answerCbQuery();

            const currentScene = ctx.scene?.current?.id;
            const currentFlowName = ctx.session?.currentFlow;

            if ( !currentFlowName || !flows[currentFlowName] ) {
                await ctx.reply('flow مشخص نیست.');
                return await ctx.scene.leave();
            }

            const nextScene = flows[currentFlowName][currentScene];

            if ( nextScene ) {
                await ctx.reply('رد شدی. می‌ریم مرحله بعد.');
                await ctx.scene.enter(nextScene);
            } else {
                await ctx.reply('مراحل تموم شد.');
                await ctx.scene.leave();
            }
        } else {
            return next();
        }

    } catch ( e ) {
        await ctx.reply('امکان رد کردن نیست.');
    }
}