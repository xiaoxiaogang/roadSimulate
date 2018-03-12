var express = require('express');
var router = express.Router();


router.use(express.static('frontpage'));
router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.sendFile('index.html', '', null);
});

console.log('CCC');
/* GET home page. */
router.post('/ajax/main', function(req, res, next) {
  console.log("router.mountpath:", router.mountpath); // /admin
  //res.render('index', { title: 'Expressccccc' });
  res.send({'name':'wang', "value":111});
});


router.use('/admin', function(req, res, next) {
  console.log("router.mountpath:", router.locals); // /admin
  res.render('index', { title: 'Expressccccc' });
})


module.exports = router;
