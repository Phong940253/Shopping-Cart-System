const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

module.exports.productReviewSchema = new Schema(
    {
        productId: ObjectId,
        parentId: ObjectId,
        title: String,
        rating: Number,
        published: Number,
        publishedAt: Date,
        content: String,
    },
    { timestamps: true }
);

module.exports.productReviewModel = model(
    "product_review",
    this.productReviewSchema
);
