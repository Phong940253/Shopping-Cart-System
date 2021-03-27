const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let cartItem = new db.cartItemModel(req.body);
        let result = await cartItem.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let cartItem = await db.cartItemModel.findById(req.params.id).exec();
        res.send(cartItem);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let cartItem = await db.cartItemModel.findById(req.params.id).exec();
        cartItem.set(req.body);
        let result = await cartItem.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
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
};
