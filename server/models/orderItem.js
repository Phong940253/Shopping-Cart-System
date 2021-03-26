const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;
const Decimal128 = require("mongoose").Decimal128;

module.exports.orderItemSchema = new Schema(
    {
        productId: ObjectId,
        orderId: ObjectId,
        sku: String,
        price: Decimal128,
        discount: Decimal128,
        quantity: Number,
        content: String,
    },
    { timestamps: true }
);

module.exports.orderItemModel = model("order-item", this.orderItemSchema);
