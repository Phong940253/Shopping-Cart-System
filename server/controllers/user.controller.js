const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let user = new db.userModel(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let user = await db.userModel.findById(req.params.id).exec();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let user = await db.userModel.findById(req.params.id).exec();
        user.set(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.userModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
