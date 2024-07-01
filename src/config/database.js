const { Sequelize } = require('sequelize');
const initModels = require("../models/init-models");

const sequelize = new Sequelize('lb_charm', 'root', 'diogodias11', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
const db = initModels(sequelize);

module.exports = db;
