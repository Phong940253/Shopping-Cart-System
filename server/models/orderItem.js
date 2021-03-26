const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
const Decimal128 = Mongoose.Decimal128;
module.exports.orderItemModel = Mongoose.model("order-item", {
    productId: ObjectId,
    orderId: ObjectId,
    sku: String,
    price: Decimal128,
    discount: Decimal128,
    quantity: Number,
    createAt: Date,
    updateAt: Date,
    content: String,
});
