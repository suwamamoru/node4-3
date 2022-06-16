'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController'),
      thumbsUpsController = require('../controllers/thumbsUpsController');

router.post(
  '/:id/thumbsUps',
  usersController.isAuthenticated,
  thumbsUpsController.thumbsUps,
  thumbsUpsController.create,
  thumbsUpsController.delete
);

module.exports = router;