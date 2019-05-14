var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dBObject = require('./models/DBObject');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRegisterRouter = require('./routes/userRegister');
var userRegisterFormRouter = require('./routes/userRegisterForm');
var userLoginFormRouter = require('./routes/userLoginForm');

var app = express();

//bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/assets', [
  express.static(__dirname + '/node_modules/jquery/dist/'),
 
]);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userRegister', userRegisterRouter);
app.use('/userLoginForm', userLoginFormRouter);
app.use('/userRegisterForm', userRegisterFormRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.locals.dBObject = new dBObject('localhost', 27017, "ofnSaber");

module.exports = app;
