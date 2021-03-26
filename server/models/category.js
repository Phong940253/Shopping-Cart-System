const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

module.exports.categorySchema = new Schema(
    {
        parentId: ObjectId,
        title: String,
        metaTitle: String,
        slug: String,
        content: String,
    },
    { timestamps: true }
);
module.exports.categoryModel = model("category", this.categorySchema);
