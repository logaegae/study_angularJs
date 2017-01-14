var express = require('express');
var exRouter = express.Router();
var router = express.Router();

exRouter.use("/", router);

router.all("/index.ejs", function(req, res, next){
    res.locals.title="Study AngularJs with NodeJs";
    next();
});

module.exports = exRouter;
