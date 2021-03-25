const Mongoose = require("mongoose");
const url =
    "mongodb+srv://phong940253:01676940253@server-shopping-cart.x8zao.mongodb.net/shoppingcart?retryWrites=true&w=majority";
Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log(" Mongoose is connected")
);

const userModel = Mongoose.model("user", {
    firstName: String,
    middleName: String,
    lastName: String,
    mobile: String,
    email: String,
    passwordHash: String,
    admin: Number,
    vendor: Number,
    registerAt: Date,
    lastLogin: Date,
    intro: String,
    profile: String,
});

module.exports.userModel = userModel;
