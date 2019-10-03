'use strict'
var dbName = require('./config/config_cms');

const Sequelize = require('sequelize');

const PersonModel = require('./models/person');
const DBURL = 'mysql://root:root@localhost:8889/Sequelize';

// Se instancia el ORM
const sequelize = new Sequelize(DBURL);

const Person = PersonModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Tablas creadas');
    });
module.exports = {
    Person
}