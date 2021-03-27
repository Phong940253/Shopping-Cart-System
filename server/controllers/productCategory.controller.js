const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let productCategory = new db.productCategoryModel(req.body);
        let result = await productCategory.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let productCategory = await db.productCategoryModel
            .findById(req.params.id)
            .exec();
        res.send(productCategory);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let productCategory = await db.productCategoryModel
            .findById(req.params.id)
            .exec();
        productCategory.set(req.body);
        let result = await productCategory.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.productCategoryModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
