const Redis = require("ioredis");
const { REDIS_HOST, REDIS_PORT, REDIS_TTL, REDIS_TIMEOUT, REDIS_PASSWORD } = process.env;

let redis;

// Create a Redis instance
(async () => {
    redis = new Redis({
        host: REDIS_HOST,
        port: REDIS_PORT,
        commandTimeout: REDIS_TIMEOUT,
        password: REDIS_PASSWORD
    });
    redis.on("error", (err) => {
        console.log(err);
    });
})();

// Get key data from Redis cache
async function getCache(key) {
    try {
        const cacheData = await redis.get(key);
        return cacheData;
    } catch (err) {
        return null;
    }
}

// Set Redis cache Key with a given expiry
function setCache(key, data, ttl = REDIS_TTL) {
    try {
        redis.set(key, JSON.stringify(data), "EX", ttl);
    } catch (err) {
        return null;
    }
}

// Remove given Redis cache key
function removeCache(key) {
    try {
        redis.del(key);
    } catch (err) {
        return null;
    }
}

module.exports = { getCache, setCache, removeCache };