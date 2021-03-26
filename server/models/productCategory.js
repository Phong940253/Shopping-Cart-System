const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

module.exports.productCategorySchema = new Schema(
    {
        productId: ObjectId,
        categoryId: ObjectId,
    },
    { timestamps: true }
);
module.exports.productCategoryModel = model(
    "product-category",
    this.productCategorySchema
);
