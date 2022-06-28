var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ status: "alive" });
});

module.exports = router;
