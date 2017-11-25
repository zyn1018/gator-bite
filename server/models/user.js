var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var crypto = require("crypto");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var secret = require("../config.json").secret

var userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  username: String,
  password: String,
  passwordLength: Number,
  address: String,
  payment: String,
  hash: String,
  salt: String
});
userSchema.methods.setPassword = function(pwd) {
  this.hash = bcrypt.hashSync(pwd, 10);
}
userSchema.methods.validPassword = function (pwd) {
  return bcrypt.compareSync(pwd, this.hash);
};
userSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id : this._id,
    email : this.email,
    exp: parseInt(expiry.getTime() / 1000)
  }, secret);
}
// userSchema.plugin(passportLocalMongoose);
var User = mongoose.model("users", userSchema);

module.exports = User;
