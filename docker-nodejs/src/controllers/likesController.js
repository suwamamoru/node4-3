'use strict';

const Like = require('../models').Like;

module.exports = {
  create: (req, res) => {
    Like.create({
      postId: req.params.postId,
      userId: res.locals.currentUser.id
    })
      .then(() => {
        res.redirect('/posts/posts');
      })
      .catch(error => {
        console.log(`Error creating likes: ${error.message}`);
      })
  },

  delete: (req, res) => {
    Like.findOne({
      where: {
        postId: req.params.postId,
        userId: req.params.userId
      }
    })
      .then((like) => {
        like.destroy();
        res.redirect('/posts/posts');
      })
      .catch(error => {
        console.log(`Error deleting likes: ${error.message}`);
      })
  }
};