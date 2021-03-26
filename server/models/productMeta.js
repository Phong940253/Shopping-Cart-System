const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
module.exports.productMetaModel = Mongoose.model("product-meta", {
    productId: ObjectId,
    key: String,
    content: String,
});
