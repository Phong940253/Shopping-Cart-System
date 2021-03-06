const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const { userModel } = require("./user.js");
const { cartModel } = require("./cart.js");
const { cartItemModel } = require("./cartItem.js");
const { productModel } = require("./product.js");
const { transactionModel } = require("./transaction.js");
const { orderModel } = require("./order.js");
const { orderItemModel } = require("./orderItem.js");
const { tagModel } = require("./tag.js");
const { productTagModel } = require("./productTag.js");
const { categoryModel } = require("./category.js");
const { productCatogoryModel } = require("./productCategory.js");
const { productMetaModel } = require("./productMeta.js");
const { productReviewModel } = require("./productReview.js");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.userModel = userModel;
db.cartModel = cartModel;
db.cartItemModel = cartItemModel;
db.productModel = productModel;
db.transactionModel = transactionModel;
db.orderModel = orderModel;
db.orderItemModel = orderItemModel;
db.tagModel = tagModel;
db.productTagModel = productTagModel;
db.categoryModel = categoryModel;
db.productCatogoryModel = productCatogoryModel;
db.productMetaModel = productMetaModel;
db.productReviewModel = productReviewModel;
module.exports = db;
