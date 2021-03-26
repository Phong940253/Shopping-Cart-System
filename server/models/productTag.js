const Mongoose = require("mongoose");
const ObjectId = Mongoose.ObjectId;
module.exports.productTagModel = Mongoose.model("product-tag", {
    productId: ObjectId,
    tagId: ObjectId,
});
