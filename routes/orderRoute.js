const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.get('/orders', orderController.order);

module.exports = router;
