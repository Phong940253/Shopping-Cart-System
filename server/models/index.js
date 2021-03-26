const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const { userModel } = require("./user.js");
const { cartModel } = require("./cart.js");
const { cartItemModel } = require("./cartItem.js");
const { productModel } = require("./product.js");
const { transactionModel } = require("./transaction.js");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.userModel = userModel;
db.cartModel = cartModel;
db.cartItemModel = cartItemModel;
db.productModel = productModel;
db.transactionModel = transactionModel;
module.exports = db;
