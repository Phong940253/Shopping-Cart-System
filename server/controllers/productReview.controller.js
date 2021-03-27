const db = require("../models/index.js");

exports.create = async (req, res) => {
    try {
        let productReview = new db.productReviewModel(req.body);
        let result = await productReview.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let productReview = await db.productReviewModel
            .findById(req.params.id)
            .exec();
        res.send(productReview);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.edit = async (req, res) => {
    try {
        let productReview = await db.productReviewModel
            .findById(req.params.id)
            .exec();
        productReview.set(req.body);
        let result = await productReview.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let result = await db.productReviewModel
            .deleteOne({
                _id: req.params.id,
            })
            .exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
