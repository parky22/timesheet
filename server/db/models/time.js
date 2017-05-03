const Sequelize = require('sequelize');
const db = require('../db');

const Time = db.define('time', {
  timeIn: {
    type: Sequelize.TEXT
  },
  timeOut: {
    type: Sequelize.TEXT
  },
  comments: {
    type: Sequelize.TEXT
  }
}, {
  classMethods: {
    getDayHours: function(day) {
      return Time.findAll({
        where: {
          timeIn: day
        }
      })
    },
    getWeekHours: function(week) {
      return;
    }
  }
});

module.exports = Time;
