'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        caption: 'Hill station',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption: 'Beach',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption: 'Cultural',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption: 'Wildlife',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption: 'Medical',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        caption: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('categories', null, {});
  }
};
