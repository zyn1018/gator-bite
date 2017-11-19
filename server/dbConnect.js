var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");
mongoose.connect('mongodb://senb:slksl@ds121535.mlab.com:21535/gator-bite');

var restSchema = new mongoose.Schema({
  email: String,
  password: String,
  picture: String,
  type: Array,
  delivery_fee:Number,
  menu: Array
});
var Restaurant = mongoose.model("Restaurant", restSchema);
module.exports.Restaurant = Restaurant;


