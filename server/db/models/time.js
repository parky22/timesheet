const Sequelize = require('sequelize');
const db = require('../db');

const Time = db.define('time', {
  timeIn: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  }
});

module.exports = Time;
