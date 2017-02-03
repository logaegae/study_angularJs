var express = require('express');
var exRouter = express.Router();
var router = express.Router();
var https = require('https');
var querystring = require('querystring');

exRouter.use("/", router);

router.all("/nSearch.ejs", function(req, res, next) {
    if(req.query.search){
        var search = req.query.search;
        var queryOption = {'query':search, 'display':10, 'start':1, 'sort':'sim'};
        var query = querystring.stringify(queryOption);
        var client_id = 'MYFzJ7c_ayIQSsH8l8s1';
        var client_secret = 'fEWEUntV8o';
        var options = {
            host: 'openapi.naver.com',
            port: 443,
            path: '/v1/search/shop.json?'+query,
            method: 'GET',
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret
            }
        };
        req = https.request(options, function(response) {
                response.setEncoding('utf8');
                response.on('data', function (json) {
                    var list = JSON.parse(json);
                    console.log(list)
                    res.locals.data = list;
                    next();
                });
            });
        req.end();
    }else{
        next();
    }

});

module.exports = exRouter;
