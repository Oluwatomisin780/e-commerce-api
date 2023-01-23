const express = require('express');
const Lesson = require('../models/lessonModel');
exports.createLesson = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const location = req.body.location;
  const space = req.body.space;
  let lesson = new Lesson({
    name: name,
    location: location,
    price: price,
    space: space,
  });
  if (req.file) {
    lesson.image = req.file.path;
  }
  const newLesson = await lesson.save();
  res.status(200).json({ newLesson });
};
exports.getLesson = async (req, res) => {
  const allLesson = await Lesson.find();
  res.status(200).json(allLesson);
  console.log(allLesson);
};

exports.update = async (req, res) => {
  const lessonId = req.params.id;
  const lesson = await Lesson.findById(lessonId);
  if (!lesson) {
    res.status(404).json({
      message: `lesson with ${lessonId} does not exist`,
    });
  }
  const newLesson = await Lesson.findByIdAndUpdate(lessonId, req.body, {
    new: true,
  });
  const updatedLesson = await newLesson.save();
  res.status(200).json(updatedLesson);
};
