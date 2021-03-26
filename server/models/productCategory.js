const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
module.exports.productCategory = Mongoose.model("product-category", {
    productId: ObjectId,
    categoryId: ObjectId,
});
