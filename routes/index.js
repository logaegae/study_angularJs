var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Study AngularJs' });
});

router.get('/ex.html', function(req, res, next) {
  res.render('ex.ejs');
});

module.exports = router;
