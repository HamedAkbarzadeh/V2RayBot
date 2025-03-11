import Redis from "ioredis";

const redis = new Redis();

export async function saveStep(userId, step) {
    const [last] = await lastValue(userId);

    if (last == step) return;

    if (step == "home") {
        await redis.del(`steps:${userId}`)
    }
    await redis.rpush(`steps:${userId}`, step);
    // await showLrange(userId);

}
export async function showLrange(userId) {
    const steps = await redis.lrange(`steps:${userId}`, 0, -1);

    console.log(steps, steps.length);
    return steps;
}
async function lastValue(userId) {
    const last = await redis.lrange(`steps:${userId}`, -1, -1);
    // console.log("last", last);
    return last;
}
export async function goBackStep(userId) {
    const step = await redis.rpop(`steps:${userId}`)
    // console.log("res ", step);
    return step;
}