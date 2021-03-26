const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

module.exports.productMetaSchema = new Schema(
    {
        productId: ObjectId,
        key: String,
        content: String,
    },
    { timestamps: true }
);

module.exports.productMetaModel = model("product-meta", this.productMetaSchema);
