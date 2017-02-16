var express = require('express');
var exRouter = express.Router();
var router = express.Router();
var fs = require('fs');
var path = require('path');

exRouter.use("/", router);

router.all("/index.ejs", function(req, res, next){
    var listJson = [];
    var list = fs.readdirSync('./views/','utf-8')
    list.forEach(function(e,i){
        if(e.indexOf('.ejs') != -1) {
            var name = e.split('.ejs')[0];
            listJson.push({file:name});
        }
    })
    res.locals.listJson = listJson;

    res.locals.title="Study AngularJs in NodeJs";
    next();
});

module.exports = exRouter;
