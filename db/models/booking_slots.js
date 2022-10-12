'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_slots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking_slots.init({
    dayOfWeek: DataTypes.INTEGER,
    bookingCount: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'booking_slots',
  });
  return booking_slots;
};