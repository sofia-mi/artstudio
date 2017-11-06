var express  = require ('express');
var router   = express.Router ();
var log      = require ('../bin/log') (module);
var SubscribeModel = require ('../bin/mongoose').SubscribeModel;

router.post('/', function (req, res, next) {
  return res.render('subscribe', { headerLogoSrc: '/images/logo.jpg', email: req.body.email});
});

router.post('/full', function (req, res, next) {
  var subscribe = new SubscribeModel({
                                       firstName: req.body.firstName,
                                       lastName: req.body.lastName,
                                       email: req.body.email,
                                       startSubscribeDate: req.body.startSubscribeDate
                                     });
  subscribe.save (function (err) {
    if (!err) {
      log.info ("subscribe created");
      return res.send ({status: 'OK', subscribe: subscribe});
    } else {
      console.log (err);
      if (err.name === 'ValidationError') {
        res.statusCode = 400;
        res.send ({error: 'Validation error'});
      } else {
        res.statusCode = 500;
        res.send ({error: 'Server error'});
      }
      log.error ('Internal error(%d): %s', res.statusCode, err.message);
    }
  });
});

router.get ('/list', function (req, res, next) {
  return SubscribeModel.find(function (err, articles) {
    if (!err) {
      // return res.render ('art-detailed', {headerLogoSrc: '../images/logo.jpg', articles: articles[0]._doc});
      return res.send(articles);
    } else {
      res.statusCode = 500;
      log.error('Internal error(%d): %s',res.statusCode,err.message);
      return res.send({ error: 'Server error' });
    }
  });
});

module.exports = router;