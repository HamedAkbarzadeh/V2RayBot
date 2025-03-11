import Redis from "ioredis";

const redis = new Redis();

export async function saveStep(userId, step) {
    await redis.rpush(`steps:${userId}`, step);
}