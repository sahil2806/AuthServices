'use strict';

const { Update } = require('@mui/icons-material');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'ADMIN',
        createdAt:new Date(),
        UpdatedAt :new Date()
      },
      {
        name: 'CUSTOMER',
        createdAt:new Date(),
        UpdatedAt :new Date()
      },
      {
        name: 'AIRLINE_BUSINESS',
        createdAt:new Date(),
        UpdatedAt :new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
