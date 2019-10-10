'use strict'
const s3 = require('../config/s3.config');
const env = require('../config/s3.env');


var controller = {

    doUpload: function(req, res){
        const params = {
            Bucket: env.Bucket,
            Key: req.file.originalname,
            Body: req.file.buffer
        };

        s3.upload(params, (err, data) => {
            if (err) {
                res.status(500).send({message: err});
            }

            res.status(200).send({file: req.file.originalname, data: data});
        });

    },
    
    listKeyName: function(req, res){
        const params = {
            Bucket: env.Bucket
        };

        var keys = [];

        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
                res.status(500).send({message: err});
            } else {
                var contents = data.Contents;
                contents.forEach(function(content){
                    keys.push(content.Key);
                });
                res.status(200).send({key: keys, data: data});
            }
        });
    },



    doDownload: function(req, res){
        const params = {
            Bucket: env.Bucket,
            Key: req.params.filename
        };

        res.setHeader('Content-Disposition', 'attachment');

        s3.getObject(params).createReadStream().on('error', function(err){
            res.status(500).json({error: err});
        }).pipe(res);
    }




};

module.exports = controller;