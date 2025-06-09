import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);

const hashKey = (key: string) => `cache:${Buffer.from(key).toString("base64")}`;

export const getCachedResponse = async (key: string) => {
  return await redis.get(hashKey(key));
};

export const setCachedResponse = async (
  key: string,
  value: string,
  ttl = 300
) => {
  await redis.set(hashKey(key), value, "EX", ttl);
};
