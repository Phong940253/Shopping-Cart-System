const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let tag = new db.tagModel(req.body);
        let result = await tag.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let tag = await db.tagModel.findById(req.params.id).exec();
        res.send(tag);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let tag = await db.tagModel.findById(req.params.id).exec();
        tag.set(req.body);
        let result = await tag.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.tagModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
