const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

module.exports.productTagSchema = new Schema(
    {
        productId: ObjectId,
        tagId: ObjectId,
    },
    { timestamps: true }
);

module.exports.productTagModel = model("product-tag", this.productTagSchema);
