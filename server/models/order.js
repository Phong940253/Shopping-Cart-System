const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;
const Decimal128 = require("mongoose").Decimal128;

module.exports.orderSchema = new Schema(
    {
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
        content: String,
    },
    { timestamps: true }
);

module.exports.orderItemModel = model("order", this.orderSchema);
