const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;
const Decimal128 = require("mongoose").Decimal128;
module.exports.productSchema = new Schema(
    {
        userId: ObjectId,
        title: String,
        metaTitle: String,
        slug: String,
        summary: String,
        type: Number,
        sku: String,
        price: Decimal128,
        discount: Decimal128,
        quantity: Number,
        shop: Number,
        publishedAt: Date,
        startsAt: Date,
        endsAt: Date,
        content: String,
    },
    { timestamps: true }
);
module.exports.productModel = model("product", this.productSchema);
