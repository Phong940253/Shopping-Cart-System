const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let order = new db.orderModel(req.body);
        let result = await order.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let order = await db.orderModel.findById(req.params.id).exec();
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let order = await db.orderModel.findById(req.params.id).exec();
        order.set(req.body);
        let result = await order.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.orderModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
