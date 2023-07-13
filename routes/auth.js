var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');
const secureMV = require('./mv/forAuthorize');

router.get('/login', (req, res) => {
  
  const result = authController.login('test', '123456');
  req.session.userId = result.payload.userID;
  console.log(req.session.userId);
  if(result.status === 'ok'){
    res.json(result);
  }
  
});

router.get('/secure', secureMV, (req, res, next) => {
    res.json({status: 'You are in a secret page'});
});

router.get('/logout', (req, res) => {
  req.session.userId = null;
  res.json({status: 'ok'});
});

module.exports = router;