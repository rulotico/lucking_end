var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lucking' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Lucking' });
});

// router.get('/registro', function(req, res, next) {
//   res.render('index', { title: 'REGISTRO' });
// });


router.get('/registro', function(req, res, next) {
  res.render('index', { title: 'REGISTRO' });
});

module.exports = router;
