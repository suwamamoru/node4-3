'use strict';

const ThumbsUp = require('../models').ThumbsUp;

module.exports = {
  thumbsUps: (req, res, next) => {
    ThumbsUp.findOne({
      where: {
        postId: req.params.id,
        userId: res.locals.currentUser.id
      }
    })
      .then(thumbsUp => {
        if (thumbsUp !== null) {
          req.skipCreate = true;
        }
        next();
      })
      .catch(error => {
        console.log(`Error fetching thumbsUps: ${error.message}`);
        next(error);
      });
  },

  create: (req, res, next) => {
    if (req.skipCreate) {
      next();
    } else {
      ThumbsUp.create({
        postId: req.params.id,
        userId: res.locals.currentUser.id
      })
        .then(() => {
          req.skipDelete = true;
          next();
        })
        .catch(error => {
          console.log(`Error creating thumbsUps: ${error.message}`);
          next(error);
        })
    }
  },

  delete: (req, res, next) => {
    if (req.skipDelete) {
      res.redirect('/posts/posts');
    } else {
      ThumbsUp.findOne({
        where: {
          postId: req.params.id,
          userId: res.locals.currentUser.id
        }
      })
        .then((thumbsUp) => {
          thumbsUp.destroy();
          res.redirect('/posts/posts');
        })
        .catch(error => {
          console.log(`Error deleting thumbsUps: ${error.message}`);
        })
    }
  }
};