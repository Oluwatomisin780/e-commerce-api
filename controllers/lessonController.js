const express = require('express');
const Lesson = require('../models/lessonModel');
exports.createLesson = async (req, res) => {
  const topic = req.body.topic;
  const price = req.body.price;
  const location = req.body.location;
  const space = req.body.space;
  const lesson = new Lesson({
    topic,
    price,
    location,
    space,
  });
  const newLesson = await lesson.save();
  res.status(200).json({ newLesson });
};
