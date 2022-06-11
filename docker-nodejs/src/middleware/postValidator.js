'use strict';

const { check } = require('express-validator');

const postValidator = (req, res) => {
  return [
    check('title')
      .notEmpty()
      .withMessage('タイトルを入力してください。')
      .isLength({ max: 20 })
      .withMessage('タイトルは20文字以内で入力してください。'),
    check('contents')
      .notEmpty()
      .withMessage('コンテンツを入力してください。')
      .isLength({ max: 140 })
      .withMessage('コンテンツは140文字以内で入力してください。')
  ]
}

module.exports = { postValidator };