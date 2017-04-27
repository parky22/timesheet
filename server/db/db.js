const Sequelize = require('sequelize');

const name = 'StoreTimesheet';

const db = new Sequelize(
  process.env.DATABASE_URL ||
  `postgres://localhost:5432/${name}`,
  { logging: false }
); 

module.exports = db;
