const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let category = new db.categoryModel(req.body);
        let result = await category.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let category = await db.categoryModel.findById(req.params.id).exec();
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let category = await db.categoryModel.findById(req.params.id).exec();
        category.set(req.body);
        let result = await category.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.categoryModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
