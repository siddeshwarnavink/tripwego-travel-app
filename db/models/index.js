'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

/* Custom handler for reading current working directory */
const models = process.cwd() + '/db/models/' || __dirname;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}
function requireDynamically(path) {
  path = path.split('\\').join('/');
  return eval(`require('${path}');`);
}
function importModel(modelName) {
  const path = models + modelName + '.js';
  db[modelName] = requireDynamically(path)(sequelize, Sequelize.DataTypes);
}

importModel('places');
importModel('categories');
importModel('booking_slots');
importModel('user_bookings');

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;