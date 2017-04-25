const Sequelize = require('sequelize');

const Time = db.define('time', {
  timeIn: {
    type: Sequelize.DATE
  }
});

module.exports = Time;