const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER
const HomeController = require('../controller/HomeController');

// ROUTINGNYA
router.get('/', HomeController.home);

module.exports = router;
