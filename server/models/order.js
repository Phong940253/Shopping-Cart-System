const Mongoose = require("mongoose");
const Decimal128 = Mongoose.Decimal128;
const ObjectId = Mongoose.ObjectId;

module.exports.orderModel = Mongoose.model("order", {
    userId: ObjectId,
    sessionId: ObjectId,
    token: String,
    static: Number,
    subTotal: Decimal128,
    itemDiscount: Decimal128,
    tax: Decimal128,
    shipping: Decimal128,
    total: Decimal128,
    promo: String,
    discount: Decimal128,
    grandTotal: Decimal128,
    firstName: String,
    middleName: String,
    lastName: String,
    mobile: String,
    email: String,
    line1: String,
    line2: String,
    city: String,
    provice: String,
    country: String,
    createAt: Date,
    updateAt: Date,
    content: String,
});
