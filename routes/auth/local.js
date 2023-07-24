var express = require('express');
const path = require('path');
var router = express.Router();
const secureMV = require('../mv/forAuthorize');
const authController = require('../../controllers/auth').strategies.local;
const multer = require('multer');
const pathUp = path.join(__dirname + '/../../public/uploads');
const upload = multer({ dest: pathUp });

const authorize = (req, res, result) => {
    req.session.userId = result.payload.userID;
    
    res.json(result);
    
}

router.get('/login', (req, res) => {
    res.render('authorization');
});

router.post('/login', upload.none(), async(req, res) => {
    let data = req.body;
    const result = await authController.login(data.email, data.password);
    authorize(req, res, result);
    
});

router.get('/registration', (req, res) => {
    res.render('registration');
});

router.post('/registration', upload.none(), async(req, res) => {
    let data = req.body;
    const result = await authController.registration(data.email, data.password);
    authorize(req, res, result);
});
  
router.get('/secure', secureMV, (req, res, next) => {
    res.json({status: 'You are in a secret page'});
});
  
router.get('/logout', (req, res) => {
req.session.userId = null;
res.json({status: 'ok'});
});

module.exports = router;