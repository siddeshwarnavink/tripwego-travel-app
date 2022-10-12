'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class places extends Model {
    static associate(models) {
      places.belongsTo(models.categories, {
        as: 'categories',
        foreignKey: 'category',
        constraints: true,
      });
    }
  }
  places.init({
    title: DataTypes.STRING,
    short_description: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    cover_picture: DataTypes.STRING,
    facilities: DataTypes.STRING,
    price: DataTypes.INTEGER,
    youtubeId: DataTypes.STRING,
    locations: DataTypes.TEXT('long'),
    pictures: DataTypes.TEXT('long'),
    roadmap: DataTypes.TEXT('long'),
  }, {
    sequelize,
    modelName: 'places',
  });
  return places;
};