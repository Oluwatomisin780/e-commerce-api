const OrderModel = require('../models/orderModel');
const lessonModel = require('../models/lessonModel');

exports.createOrder = async (req, res) => {
  const order = new OrderModel({
    phoneNumber: req.body.phoneNumber,
    lesson: req.lesson.id,
  });
  const orderedLesson = await order.save();
  res.status(200).json({ orderedLesson });
};

exports.order = async (req, res) => {
  const orderedSpace = await OrderModel.find();
  res.status(200).json(orderedSpace);
};
