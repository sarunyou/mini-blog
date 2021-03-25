var express = require('express');
var router = express.Router();

router.post('/generate-user', function(req, res, next) {
    res.status(200).json({})
});

router.post('/sign-in', function(req, res, next) {
    res.status(200).json({})
});

module.exports = router;
