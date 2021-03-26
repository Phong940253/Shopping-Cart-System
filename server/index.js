// server/index.js
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const BodyParser = require("body-parser");
const app = express();
const db = require("./models/index");
const { request } = require("http");
const { response } = require("express");
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

app.post("/user", async (request, response) => {
    try {
        let user = new db.userModel(request.body);
        let result = await user.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/user/:id", async (request, response) => {
    try {
        let user = await db.userModel.findById(request.params.id).exec();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/user/all", async (request, response) => {
    try {
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put("/user/:id", async (request, response) => {
    try {
        let user = await db.userModel.findById(request.params.id).exec();
        user.set(request.body);
        let result = await user.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/user/:id", async (request, response) => {
    try {
        let result = await db.userModel
            .deleteOne({
                _id: request.params.id,
            })
            .exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
