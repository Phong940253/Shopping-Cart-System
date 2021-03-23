const { MongoClient } = require("mongodb");

const url =
    "mongodb+srv://phong940253:01676940253@server-shopping-cart.x8zao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((err) => {
    // perform actions on the collection object
    try {
    } catch (e) {
        console.log(e);
    }
    console.log("connected");
});
