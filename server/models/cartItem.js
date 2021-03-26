const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;
const Decimal128 = require("mongoose").Decimal128;

module.exports.cartItemSchema = new Schema(
    {
        productId: ObjectId,
        cartId: ObjectId,
        sku: String,
        price: Decimal128,
        discount: Decimal128,
        quantity: Number,
        active: Number,
        content: String,
    },
    { timestamps: true }
);

module.exports.cartItemModel = model("cart_item", this.cartItemSchema);
