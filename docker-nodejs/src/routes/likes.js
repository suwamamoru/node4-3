'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController'),
      likesController = require('../controllers/likesController');

router.post(
  '/:postId/likes',
  usersController.isAuthenticated,
  likesController.create
);

router.post(
  '/:postId/likes/:userId',
  usersController.isAuthenticated,
  likesController.delete
)

module.exports = router;