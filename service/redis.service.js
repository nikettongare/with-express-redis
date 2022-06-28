const redis = require("redis");

const client = redis.createClient();
client.on("error", (err) => console.log("Redis Client Error", err));

(async () => {
  await client.connect();
})();

module.exports = {
  setData: async function (key, value) {
    return client.set(key, value);
  },
  getData: async function (key) {
    return client.get(key);
  },
};
