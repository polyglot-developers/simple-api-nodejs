let express = require('express');
let router = express.Router();

let userController = require('../controllers/userController');
let homeController = require('../controllers/homeController');

router.route('/').get(homeController.home);

router.route('/users').get(userController.getUsers);

router.route('/users/:username').get(userController.getUser);

module.exports = router;
