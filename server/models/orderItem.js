const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
module.exports.orderItemModel = Mongoose.model("order-item", {
    productId: ObjectId,
    orderId: ObjectId,
    sku: String,
    price: Number,
    discount: Number,
    quantity: Number,
    createAt: Date,
    updateAt: Date,
    content: String,
});
