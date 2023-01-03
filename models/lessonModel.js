const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  topic: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  space: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
