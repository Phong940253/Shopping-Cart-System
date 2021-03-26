const Mongoose = require("mongoose");
const Decimal128 = Mongoose.Decimal128;
const ObjectId = Mongoose.ObjectId;
module.exports.cartItemModel = Mongoose.model("cart_item", {
    productId: ObjectId,
    cartId: ObjectId,
    sku: String,
    price: Decimal128,
    discount: Decimal128,
    quantity: Number,
    active: Number,
    createAt: Date,
    updateAt: Date,
    content: String,
});
