var express = require('express');
var exRouter = express.Router();
var router = express.Router();
var ejs = require('ejs');

exRouter.use("/", router);

router.all("/*.ejs", function(req, res, next){

	if(req.originalUrl.indexOf("/admin") == 0) {
		next();
		return;
	}

	if(req.isJson) {
		res.send(res.locals);
		return;
	}

	var path = req.originalUrl.substring(1,req.originalUrl.indexOf(".ejs"));
	var paths = path.split("/");
    console.log(paths[paths.length-1])
	res.render(paths[paths.length-1], {
		menuUrl : req.path.substring(1),
		session : req.session,
		query : req.query,
		body : req.body
	});
});

module.exports = exRouter;
