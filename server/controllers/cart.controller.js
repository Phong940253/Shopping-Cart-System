const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let cart = new db.cartModel(req.body);
        let result = await cart.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let cart = await db.cartModel.findById(req.params.id).exec();
        res.send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let cart = await db.cartModel.findById(req.params.id).exec();
        cart.set(req.body);
        let result = await cart.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.cartModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
