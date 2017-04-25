const Sequelize = require('sequelize');

const Employee = db.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
