const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let orderItem = new db.orderItemModel(req.body);
        let result = await orderItem.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let orderItem = await db.orderItemModel.findById(req.params.id).exec();
        res.send(orderItem);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let orderItem = await db.orderItemModel.findById(req.params.id).exec();
        orderItem.set(req.body);
        let result = await orderItem.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.orderItemModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
