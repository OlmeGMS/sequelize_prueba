'use strict'

module.exports = (sequelize, type) => {
    const Person = sequelize.define('personas', {
        nombre: {
            type: type.STRING,
        },
        apellido: {
            type: type.STRING
        },
        telefono: {
            type: type.STRING
        }
    },{
        timestamps: true
    });

    return Person;
}