'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          userId: 1,
          title: 'test-title1',
          contents: 'test-contents1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: 'test-title2',
          contents: 'test-contents2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: 'test-title3',
          contents: 'test-contents3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          title: 'test-title4',
          contents: 'test-contents4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: 'test-title5',
          contents: 'test-contents5',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: 'test-title6',
          contents: 'test-contents6',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: 'test-title7',
          contents: 'test-contents7',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  },
};