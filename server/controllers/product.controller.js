const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let product = new db.productModel(req.body);
        let result = await product.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let product = await db.productModel.findById(req.params.id).exec();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let product = await db.productModel.findById(req.params.id).exec();
        product.set(req.body);
        let result = await product.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.productModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
