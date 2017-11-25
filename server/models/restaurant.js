var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require('bcryptjs');
var secret = require("../config.json").secret;
var jwt = require('jsonwebtoken');


var foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discript: String
});

var restSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  picture: String,
  type: String,
  delivery_fee:Number,
  menu: [foodSchema],
  hash: String,
  salt: String
});
restSchema.methods.setPassword = function(pwd) {
  this.hash = bcrypt.hashSync(pwd, 10);
};
restSchema.methods.validPassword = function (pwd) {
  return bcrypt.compareSync(pwd, this.hash);
};
restSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id : this._id,
    email : this.email,
    exp: parseInt(expiry.getTime() / 1000)
  }, secret);
}
// restSchema.plugin(passportLocalMongoose);
var Restaurant = mongoose.model("restaurants", restSchema);
module.exports = Restaurant;
