'use strict';

const User = require('../models').User,
      Post = require('../models').Post,
      { validationResult } = require('express-validator');

module.exports = {
  findAllUsers: (req, res, next) => {
    User.findAll()
      .then(users => {
        const usersJson = JSON.stringify(users);
        res.locals.users = JSON.parse(usersJson);
        next();
      })
      .catch(error => {
        console.log(`Error fetching users: ${error.message}`);
        next(error);
      });
  },

  findAllPosts: (req, res, next) => {
    Post.findAll()
      .then(posts => {
        const postsJson = JSON.stringify(posts);
        res.locals.posts = JSON.parse(postsJson);
        next();
      })
      .catch(error => {
        console.log(`Error fetching posts: ${error.message}`);
        next(error);
      });
  },

  shapingData: (req, res, next) => {
    const users = res.locals.users,
          posts = res.locals.posts;
    const authors = users.map(user => {
      return user;
    });
    const postContents = posts.map(content => {
      return content;
    });
    res.locals.authors = authors;
    res.locals.postContents = postContents
    next();
  },

  posts: (req, res) => {
    res.render('posts/posts');
  },
  
  createPage: (req, res) => {
    res.render('posts/create', {
      currentUser: res.locals.currentUser
    });
  },

  validate: (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      req.flash('error', errorMessages);
      if (req.originalUrl.indexOf('update') !== -1) {
        res.redirect(`/posts/${req.params.id}/update`);
      } else if (req.originalUrl.indexOf('create') !== -1) {
        res.redirect('/posts/create');
      }
    } else {
      next();
    }
  },

  create: (req, res) => {
    Post.create({
      userId: req.params.id,
      title: req.body.title,
      contents: req.body.contents
    })
      .then(() => {
        req.flash('success', '新しいメッセージを投稿しました。');
        res.redirect('/posts/posts');
      })
      .catch(error => {
        console.log(error);
      })
  },

  updatePage: (req, res) => {
    const id = req.params.id;
    Post.findByPk(id)
      .then(post => {
        const postJson = JSON.stringify(post),
              updatePost = JSON.parse(postJson);
        res.render('posts/update', {
          id: updatePost.id,
          title: updatePost.title,
          contents: updatePost.contents
        });
      })
      .catch(error => {
        console.log(error);
      })
  },

  update: (req, res) => {
    const id = req.params.id;
    Post.findByPk(id)
      .then(post => {
        post.title = req.body.title;
        post.contents = req.body.contents;
        post.save();
        req.flash('success', 'メッセージを編集しました。');
        res.redirect('/posts/posts');
      })
      .catch(error => {
        console.log(error);
      });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Post.findByPk(id)
      .then(post => {
        post.destroy();
        res.redirect('/posts/posts');
      })
      .catch(error => {
        console.log(error);
      });
  }
};