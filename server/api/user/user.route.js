const userController = require('./user.controller');
const router = require('express').Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router