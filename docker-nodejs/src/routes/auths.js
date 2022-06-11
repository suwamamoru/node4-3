'use strict';

const express = require('express'),
      router = express.Router(),
      authsController = require('../controllers/authsController');

router.post('/login', authsController.jwtAuthenticate);
router.use(authsController.verifyJWT);

module.exports = router;