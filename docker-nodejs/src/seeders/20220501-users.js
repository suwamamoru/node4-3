'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'user1',
          email: 'user1@example.com',
          password: '$2b$10$FM.n4tZ21nGOuhxT/0fsreRYgWG/Iyj7BM/P7jPL/bfSzuR/P1vH.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'user2',
          email: 'user2@example.com',
          password: '$2b$10$NogkGSROdo0k3p74/JZjYevGhLTMLGa1TVc6REYJmp5xIpeZAV9za',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'user3',
          email: 'user3@example.com',
          password: '$2b$10$zFNMrwh/TuXoc8FTUuC9rO2fFBDGE09wH5IEuL.KXShDPx8luMZ0G',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'user4',
          email: 'user4@example.com',
          password: '$2b$10$ge41GMfTH0isLPv3t77rW.w1uEU07f6vAzF5VTgAGELSYLiX6fy6G',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};