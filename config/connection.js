// import Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to database, pass in MYSQL information
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;