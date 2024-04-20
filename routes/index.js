const { Url } = require("../models/url");

const router = require("express").Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const urls = await Url.find();
  console.log(urls);
  res.render("index", { title: "Express", data: urls });
});

/* POST home page. */

module.exports = router;
