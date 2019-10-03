'use strict'

const {Person} = require('../sequelize');


var controller = {
    save: function(req, res){
        var params = req.body;
        Person.create({
            nombre  : params.name,
            apellido: params.surname,
            telefono: params.phone

        });
        res.status(200).send({person: 'Se ha creado la persona'});
    },
    list: function(req, res){
        Person.findAll()
        .then(persons => {
            res.status(200).send({personas: persons});
        });
    },
    get: function(req, res){
        let personId = req.params.id;
        Person.findOne({where: {id: personId}})
        .then(person => {
            res.status(200).send({person: person});
        });
    },
    update: function(req, res){
        let personId = req.params.id;
        var params   = req.body;
        Person.findOne({where: {id: personId }})
        .then(person => {
            person.update(params)
            .then(newPerson => {
                res.status(200).send({person: newPerson});
            });
        });
    },
    delete: function(req, res){
        let personId = req.params.id;
        Person.destroy({
            where: {id: personId}
        })
        .then(() => {
            res.status(200).send({message: 'Persona eliminada'});
        });
    }

};

module.exports = controller;