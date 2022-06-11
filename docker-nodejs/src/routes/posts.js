'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController'),
      postsController = require('../controllers/postsController'),
      { postValidator } = require('../middleware/postValidator');

router.get(
  '/posts',
  usersController.isAuthenticated,
  postsController.findAllUsers,
  postsController.findAllPosts,
  postsController.shapingData,
  postsController.posts
);

router.get(
  '/create',
  usersController.isAuthenticated,
  postsController.createPage
);

router.post(
  '/:id/create',
  usersController.isAuthenticated,
  postValidator(),
  postsController.validate, 
  postsController.create
);

router.get(
  '/:id/update',
  usersController.isAuthenticated,
  postsController.updatePage
);

router.post(
  '/:id/update',
  usersController.isAuthenticated,
  postValidator(),
  postsController.validate,
  postsController.update
);

router.post(
  '/:id/delete',
  usersController.isAuthenticated,
  postsController.delete
);

module.exports = router;