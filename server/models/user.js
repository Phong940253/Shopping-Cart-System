const Mongoose = require("mongoose");
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
