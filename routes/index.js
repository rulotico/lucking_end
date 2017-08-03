var express = require('express');
var router = express.Router();
var register = require("../controller/register.js");
var places = require('../controller/places.js');



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

// PLACES ENDPOINT

router.get('/places', function(req, res, next) {

  categories=req.query.categories;
  cost=req.query.cost;
  distance=req.query.distance;

  if (!categories || !cost || !distance) {
  		
  }else{
  	places.places("29.941082","-90.078772",categories,cost,distance,req,res);
  }

  

});

module.exports = router;
