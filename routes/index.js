// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'ExpressIs Here' });
// });

// module.exports = router;


// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});