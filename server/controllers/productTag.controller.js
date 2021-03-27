const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let productTag = new db.productTagModel(req.body);
        let result = await productTag.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let productTag = await db.productTagModel
            .findById(req.params.id)
            .exec();
        res.send(productTag);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let productTag = await db.productTagModel
            .findById(req.params.id)
            .exec();
        productTag.set(req.body);
        let result = await productTag.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.productTagModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
