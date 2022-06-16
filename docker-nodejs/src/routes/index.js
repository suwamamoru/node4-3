'use strict';

const express = require('express'),
      router = express.Router(),
      users = require('./users'),
      auths = require('./auths'),
      posts = require('./posts'),
      thumbsUps = require('./thumbsUps');

router.use('/auth', users);
router.use('/auth', auths);
router.use('/posts', posts);
router.use('/thumbsUps', thumbsUps);

module.exports = router;