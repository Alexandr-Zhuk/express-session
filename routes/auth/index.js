var express = require('express');
var router = express.Router();


const localAuthRoute = require('./local');

router.use('/local', localAuthRoute);

module.exports = router;