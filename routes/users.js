var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond witddh a resource');
});

router.get('/aaa', function(req, res, next) {
    res.send('respond witddh a resourceaaaa');
});

module.exports = router;
