const express = require('express');
const lessonController = require('../controllers/lessonController');
const upload = require('../middleware/upload');
const router = express.Router();

router
  .route('/')
  .get(lessonController.getLesson)
  .post(upload.single('image'), lessonController.createLesson);
router.route('/:id').put(lessonController.update);

module.exports = router;
