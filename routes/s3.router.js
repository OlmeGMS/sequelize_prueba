'use strict'

var express          = require('express');
var S3Controller     = require('../controllers/s3.controller');
var upload           = require('../config/multer.config');
var api              = express.Router();

api.post('/files/upload', upload.single('file'), S3Controller.doUpload);
api.get('/files/all', S3Controller.listKeyName);
api.get('/files/:filename', S3Controller.doDownload);

module.exports = api;