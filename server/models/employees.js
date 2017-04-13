const Sequelize = require('sequelize');

const Employee = ('employee', db.define({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}));
