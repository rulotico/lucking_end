var express = require('express');
var router = express.Router();
var register = require("../controller/register.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lucking' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Lucking' });
});

router.get('/registro', function(req, res, next) {
  name=req.query.name;
  email=req.query.email;
  register.register(name,email);
});



module.exports = router;
