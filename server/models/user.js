const { model, Schema } = require("mongoose");

module.exports.userSchema = new Schema(
    {
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
    },
    { timestamps: true }
);

module.exports.userModel = model("user", this.userSchema);
