// server/index.js
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const BodyParser = require("body-parser");
const app = express();
const db = require("./models/index");
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
    try {
        let user = new db.userModel(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/user/:id", async (req, res) => {
    try {
        let user = await db.userModel.findById(req.params.id).exec();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/user/:id", async (req, res) => {
    try {
        let user = await db.userModel.findById(req.params.id).exec();
        user.set(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete("/user/:id", async (req, res) => {
    try {
        let result = await db.userModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
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
