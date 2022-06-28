const redis = require("../service/redis.service");

module.exports = (app) => {
  app.post("/setData", async function (req, res, next) {
    const { key, value } = req.body;

    const result = await redis.setData(key, JSON.stringify(value));

    res.json({ success: true });
  });

  app.post("/getData", async function (req, res, next) {
    const { key } = req.body;

    const result = await redis.getData(key);

    res.json({ success: true, data: JSON.parse(result) });
  });
};
