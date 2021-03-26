// server/index.js
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const BodyParser = require("body-parser");
const app = express();
const db = require("./models/index");
const user = require("./controllers/user.controller.js");
const cart = require("./controllers/cart.controller.js");
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
    try {
        let order = new db.orderModel(req.body);
        let result = await order.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/order/:id", async (req, res) => {
    try {
        let order = await db.orderModel.findById(req.params.id).exec();
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/order/:id", async (req, res) => {
    try {
        let order = await db.orderModel.findById(req.params.id).exec();
        order.set(req.body);
        let result = await order.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete("/order/:id", async (req, res) => {
    try {
        let result = await db.orderModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
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
    try {
        let cartItem = new db.cartItemModel(req.body);
        let result = await cartItem.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/cart-item/:id", async (req, res) => {
    try {
        let cartItem = await db.cartItemModel.findById(req.params.id).exec();
        res.send(cartItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/cart-item/:id", async (req, res) => {
    try {
        let cartItem = await db.cartItemModel.findById(req.params.id).exec();
        cartItem.set(req.body);
        let result = await cartItem.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete("/cart-item/:id", async (req, res) => {
    try {
        let result = await db.cartItemModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
