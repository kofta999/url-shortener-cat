const { Url } = require("../models/url");

const router = require("express").Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const urls = await Url.find();
  res.render("index", { title: "Express", data: urls });
});

/* POST home page. */
router.post("/", async function (req, res, next) {
  let { urlInput, aliasInput } = req.body;

  if (!aliasInput) {
    aliasInput = Math.random().toString(36).substring(2, 8);
  }

  urlInput = urlInput.startsWith("http") ? urlInput : "https://" + urlInput;

  const url = new Url({ original: urlInput, shortened: aliasInput });

  await url.save();

  res.redirect("/");
});

/* GET shortened page */
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  const url = await Url.findOne({ shortened: id });

  if (!url) {
    res.render("404", { id });
    return;
  }

  res.redirect(url.original);
});

module.exports = router;
