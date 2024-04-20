const { Schema, model } = require("mongoose");

const UrlSchema = new Schema({
  original: String,
  shortened: String,
});

export const Url = model("url", UrlSchema);
