const Sequelize = require('sequelize');
const db = require('../db');

const Employee = db.define('employee', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Employee;
