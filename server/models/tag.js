const Mongoose = require("mongoose");
module.exports.tagModel = Mongoose.model("tag", {
    title: String,
    metaTitle: String,
    slug: String,
    content: String,
});
