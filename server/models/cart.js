const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

module.exports.cartSchema = new Schema(
    {
        userId: ObjectId,
        sessionID: String,
        token: String,
        status: Number,
        firstName: String,
        middleName: String,
        lastName: String,
        mobile: String,
        email: String,
        line1: String,
        line2: String,
        city: String,
        province: String,
        country: String,
        content: String,
    },
    { timestamps: true }
);

module.exports.cartModel = model("cart", this.cartSchema);
