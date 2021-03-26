const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
module.exports.categoryModel = Mongoose.model("category", {
    parentId: ObjectId,
    title: String,
    metaTitle: String,
    slug: String,
    content: String,
});
