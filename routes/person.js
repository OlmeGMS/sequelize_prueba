'use strict'

var express          = require('express');
var PersonController = require('../controllers/person');
var api              = express.Router();
var md_auth          = require('../middlewares/authenticated');
 
api.post('/save_person', PersonController.save);
api.get('/persons', PersonController.list);
api.get('/person/:id', PersonController.get);
api.put('/person/:id', PersonController.update);
api.delete('/person/:id', PersonController.delete);

module.exports = api;