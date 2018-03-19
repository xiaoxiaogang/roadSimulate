const express = require('express');
const cheerio = require('cheerio');
const superagent = require('superagent');
const router = express.Router();


router.use(express.static('frontpage'));
router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.sendFile('index.html', '', null);
});

console.log('index===begin');
/* GET home page. */
router.get('/ajax/main', function(req, res, next) {
  //console.log("router.mountpath:", router.mountpath); // /admin
  //res.render('index', { title: 'Expressccccc' });
  //res.send({'name':'wang', "value":111});
  getCnodeData(res);
  //next();
});

//爬虫地址的数据
function getCnodeData(res) {
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    superagent.get('https://cnodejs.org/')
        .end(function (err, sres) {
            // 常规的错误处理
            if (err) {
                return next(err);
            }
            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
            // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
            // 剩下就都是 jquery 的内容了
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });

            res.send(items);
        });
}

router.use('/admin', function(req, res, next) {
  console.log("router.mountpath:", router.locals); // /admin
  res.render('index.html', { title: 'Expressccccc' });
  next();
});


module.exports = router;
