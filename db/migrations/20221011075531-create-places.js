'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      short_description: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      cover_picture: {
        type: Sequelize.STRING
      },
      facilities: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      youtubeId: Sequelize.STRING,
      locations: Sequelize.TEXT('long'),
      pictures: Sequelize.TEXT('long'),
      roadmap: Sequelize.TEXT('long'),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('places');
  }
};