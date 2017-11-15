var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', { headerLogoSrc: '/images/logo.jpg' });
});

module.exports = router;
