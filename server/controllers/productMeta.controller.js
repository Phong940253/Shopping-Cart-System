const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let productMeta = new db.productMetaModel(req.body);
        let result = await productMeta.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let productMeta = await db.productMetaModel
            .findById(req.params.id)
            .exec();
        res.send(productMeta);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let productMeta = await db.productMetaModel
            .findById(req.params.id)
            .exec();
        productMeta.set(req.body);
        let result = await productMeta.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.productMetaModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
