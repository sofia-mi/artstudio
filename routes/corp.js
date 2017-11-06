var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('corp', { headerLogoSrc: '../images/logo.jpg' });
});

module.exports = router;