// server/index.js
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const BodyParser = require("body-parser");
const app = express();
const db = require("./models/index");
const user = require("./controllers/user.controller.js");
const cart = require("./controllers/cart.controller.js");
const order = require("./controllers/order.controller.js");
const cartItem = require("./controllers/cartItem.controller.js");
const category = require("./controllers/category.controller.js");
const product = require("./controllers/product.controller.js");
const productCategory = require("./controllers/productCategory.controller.js");
const productMeta = require("./controllers/productMeta.controller.js");
const productReview = require("./controllers/productMeta.controller.js");
const productTag = require("./controllers/productTag.controller.js");
const tag = require("./controllers/tag.controller.js");
const transaction = require("./controllers/transaction.controller.js");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/sign-in", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/sign-up", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.post("/user", async (req, res) => {
    await user.create(req, res);
});

app.get("/user/:id", async (req, res) => {
    await user.find(req, res);
});

app.put("/user/:id", async (req, res) => {
    await user.edit(req, res);
});

app.delete("/user/:id", async (req, res) => {
    await user.delete(req, res);
});

app.post("/order", async (req, res) => {
    await order.create(req, res);
});

app.get("/order/:id", async (req, res) => {
    await order.find(req, res);
});

app.put("/order/:id", async (req, res) => {
    await order.edit(req, res);
});

app.delete("/order/:id", async (req, res) => {
    await order.delete(req, res);
});

app.post("/cart", async (req, res) => {
    await cart.create(req, res);
});

app.get("/cart/:id", async (req, res) => {
    await cart.find(req, res);
});

app.put("/cart/:id", async (req, res) => {
    await cart.edit(req, res);
});

app.delete("/cart/:id", async (req, res) => {
    await cart.delete(req, res);
});

app.post("/cart-item", async (req, res) => {
    await cartItem.create(req, res);
});

app.get("/cart-item/:id", async (req, res) => {
    await cartItem.find(req, res);
});

app.put("/cart-item/:id", async (req, res) => {
    await cartItem.edit(req, res);
});

app.delete("/cart-item/:id", async (req, res) => {
    await cartItem.delete(req, res);
});

app.post("/category", async (req, res) => {
    await category.create(req, res);
});

app.get("/category/:id", async (req, res) => {
    await category.find(req, res);
});

app.put("/category/:id", async (req, res) => {
    await category.edit(req, res);
});

app.delete("/category/:id", async (req, res) => {
    await category.delete(req, res);
});

app.post("/product", async (req, res) => {
    await product.create(req, res);
});

app.get("/product/:id", async (req, res) => {
    await product.find(req, res);
});

app.put("/product/:id", async (req, res) => {
    await product.edit(req, res);
});

app.delete("/product/:id", async (req, res) => {
    await product.delete(req, res);
});

app.post("/product-category", async (req, res) => {
    await productCategory.create(req, res);
});

app.get("/product-category/:id", async (req, res) => {
    await productCategory.find(req, res);
});

app.put("/product-category/:id", async (req, res) => {
    await productCategory.edit(req, res);
});

app.delete("/product-category/:id", async (req, res) => {
    await productCategory.delete(req, res);
});

app.post("/product-meta", async (req, res) => {
    await productMeta.create(req, res);
});

app.get("/product-meta/:id", async (req, res) => {
    await productMeta.find(req, res);
});

app.put("/product-meta/:id", async (req, res) => {
    await productMeta.edit(req, res);
});

app.delete("/product-meta/:id", async (req, res) => {
    await productMeta.delete(req, res);
});

app.post("/product-review", async (req, res) => {
    await productReview.create(req, res);
});

app.get("/product-review/:id", async (req, res) => {
    await productReview.find(req, res);
});

app.put("/product-review/:id", async (req, res) => {
    await productReview.edit(req, res);
});

app.delete("/product-review/:id", async (req, res) => {
    await productReview.delete(req, res);
});

app.post("/product-tag", async (req, res) => {
    await productTag.create(req, res);
});

app.get("/product-tag/:id", async (req, res) => {
    await productTag.find(req, res);
});

app.put("/product-tag/:id", async (req, res) => {
    await productTag.edit(req, res);
});

app.delete("/product-tag/:id", async (req, res) => {
    await productTag.delete(req, res);
});

app.post("/tag", async (req, res) => {
    await tag.create(req, res);
});

app.get("/tag/:id", async (req, res) => {
    await tag.find(req, res);
});

app.put("/tag/:id", async (req, res) => {
    await tag.edit(req, res);
});

app.delete("/tag/:id", async (req, res) => {
    await tag.delete(req, res);
});

app.post("/transaction", async (req, res) => {
    await transaction.create(req, res);
});

app.get("/transaction/:id", async (req, res) => {
    await transaction.find(req, res);
});

app.put("/transaction/:id", async (req, res) => {
    await transaction.edit(req, res);
});

app.delete("/transaction/:id", async (req, res) => {
    await transaction.delete(req, res);
});
