const express = require('express');
const lessonController = require('../controllers/lessonController');
const router = express.Router();

router.route('/').get().post(lessonController.createLesson);

module.exports = router;
