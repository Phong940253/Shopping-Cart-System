const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;
const Decimal128 = require("mongoose").Decimal128;

module.exports.transactionSchema = new Schema(
    {
        userId: ObjectId,
        orderId: ObjectId,
        code: String,
        type: Number,
        mode: Number,
        status: Number,
        content: String,
    },
    { timestamps: true }
);

module.exports.transactionModel = model("transaction", this.transactionSchema);
