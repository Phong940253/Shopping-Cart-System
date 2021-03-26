const { model, Schema } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;
const Decimal128 = require("mongoose").Decimal128;

module.exports.tagSchema = new Schema(
    {
        title: String,
        metaTitle: String,
        slug: String,
        content: String,
    },
    { timestamps: true }
);

module.exports.tagModel = model("tag", this.tagSchema);
