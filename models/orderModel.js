const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderModel = new Schema({
  phoneNumber: {
    type: Number,
    require: true,
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
  },
});

module.exports = mongoose.model('Order', orderModel);
