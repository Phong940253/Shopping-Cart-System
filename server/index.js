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
