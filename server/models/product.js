const Mongoose = require("mongoose");
const Decimal128 = Mongoose.Decimal128;
const ObjectId = Mongoose.ObjectId;

const productModel = Mongoose.model("product", {
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
    createAt: Date,
    updateAt: Date,
    publishedAt: Date,
    startsAt: Date,
    endsAt: Date,
    content: String,
});
module.exports.productModel = productModel;
