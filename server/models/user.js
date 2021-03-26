const Mongoose = require("mongoose");
module.exports.userModel = Mongoose.model("user", {
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
