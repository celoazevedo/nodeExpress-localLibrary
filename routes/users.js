var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// example! creating a new rout in /routes/users.js that will display ...
// at url /users/cool/
router.get('/cool', function(req, res, next) {
  res.send('You are so cool');
});

module.exports = router;
