const Sequelize = require('sequelize');
const db = require('../db');

const Time = db.define('time', {
  timeIn: {
    type: Sequelize.DATE
  },
  timeOut: {
    type: Sequelize.DATE
  }
});

module.exports = Time;
