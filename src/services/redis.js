import Redis from "ioredis";

const redis = new Redis();

export async function redisSaveStep(userId, step) {

    const last = await redisGetStep(userId);
    console.log("TEST", last);

    // const steps = await redisShowLrange(userId);
    if (last != undefined) {
        if (last == step) return;
    }
    if (step == "home") {
        await redis.del(`steps:${userId}`)
    }
    await redis.rpush(`steps:${userId}`, step);
    await redisShowLrange(userId);

}
export async function redisShowLrange(userId) {
    const steps = await redis.lrange(`steps:${userId}`, 0, -1);

    console.log(steps, steps.length);
    return steps;
}
export async function redisGetStep(userId) {
    const last = await redis.lrange(`steps:${userId}`, -1, -1);
    // console.log("last", last);
    return last[0];
}
export async function redisGoBackStep(userId, ctx) {
    const step = await redis.rpop(`steps:${userId}`)

    // console.log("res ", step);
    return step;
}
