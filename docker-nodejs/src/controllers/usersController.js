'use strict';

const passport = require('passport'),
      { validationResult } = require('express-validator');

module.exports = {
  login: (req, res) => {
    res.render('auths/login')
  },

  loginAuthenticate: passport.authenticate('login', {
    failureFlash: true,
    failureRedirect: '/auth/login',
    successFlash: true,
    successRedirect: '/posts/posts'
  }),

  register: (req, res) => {
    res.render('auths/register');
  },

  validate: (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      req.flash('error', errorMessages);
      res.redirect('/auth/register');
    } else {
      next();
    }
  },

  registerAuthenticate: passport.authenticate('register', {
    failureFlash: true,
    failureRedirect: '/auth/register',
    successFlash: true,
    successRedirect: '/posts/posts'
  }),

  isAuthenticated: (req, res, next) => {
    if(req.isAuthenticated()) {
      next();
    } else {
      req.flash('error', "ログインしてください。");
      res.redirect('/auth/login');
    }
  },

  logout: (req, res, next) => {
    req.logout();
    req.flash('success', "ログアウトしました。");
    res.redirect('/auth/login');
  }
};