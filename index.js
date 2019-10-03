'use strict'

var app = require('./app');
var port = process.env.PORT || 3977;
var dbName = require('./config/config_cms');

const {Person} = require('./sequelize');


app.listen(port, function(){
    console.log('Servidor del api rest cms escuchando en http://localhost:'+port);
});