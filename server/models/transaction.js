const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
module.exports.transactionModel = Mongoose.model("transaction", {
    userId: ObjectId,
    orderId: ObjectId,
    code: String,
    type: Number,
    mode: Number,
    status: Number,
    createAt: Date,
    updateAt: Date,
    content: String,
});
