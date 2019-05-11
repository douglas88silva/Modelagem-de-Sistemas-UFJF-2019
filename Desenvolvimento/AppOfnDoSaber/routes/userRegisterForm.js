var express = require('express');
var router = express.Router();
//var user_create_controller = require('./../controllers/userController');

/* GET home page. */
//router.get('/', user_create_controller.user_create_post, function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('userRegisterForm', { title: 'Express' });
});

module.exports = router;
