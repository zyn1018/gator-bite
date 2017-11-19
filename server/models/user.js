var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String
});
userSchema.plugin(passportLocalMongoose);
var User = mongoose.model("users", userSchema);

module.exports.User = User;
