const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
const cartModel = Mongoose.model("cart", {
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
    createAt: Date,
    updateAt: Date,
    content: String,
});
module.exports.cartModel = cartModel;
