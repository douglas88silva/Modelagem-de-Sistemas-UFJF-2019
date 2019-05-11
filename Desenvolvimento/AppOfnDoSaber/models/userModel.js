//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  psw: String,
  avatar: String,
  birthday: Date,
  updated: { type: Date, default: Date.now() },
  registered: { type: Date, default: Date.now() },
  profile: {
    type: String,
    enum: ['admin', 'teacher', 'student',]
  }
});

// Compile model from schema
module.exports = mongoose.model('UserModel', UserSchema );