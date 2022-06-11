'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController'),
      { registerValidator } = require('../middleware/registerValidator');

router.get('/login', usersController.login);
router.post('/login', usersController.loginAuthenticate);
router.get('/register', usersController.register);
router.post(
  '/register',
  registerValidator(),
  usersController.validate,
  usersController.registerAuthenticate
);
router.post('/logout', usersController.logout);

module.exports = router;