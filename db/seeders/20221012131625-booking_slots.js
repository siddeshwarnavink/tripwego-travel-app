'use strict';

const PLACES = require('./places');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const PLACES_COUNT = PLACES.length;
    const bookingSlotSeeds = [];

    function randomNumberBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 1; i < PLACES_COUNT; i++) {
      for (let j = 0; j < randomNumberBetween(4, 6); j++) {
        bookingSlotSeeds.push({
          dayOfWeek: j,
          bookingCount: randomNumberBetween(4, 10),
          placeId: i,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    return queryInterface.bulkInsert('booking_slots', bookingSlotSeeds);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('booking_slots', null, {});
  }
};
