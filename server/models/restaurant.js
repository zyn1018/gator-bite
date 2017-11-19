var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose");

var foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discript: String
});

var restSchema = new mongoose.Schema({
  email: String,
  password: String,
  picture: String,
  type: Array,
  delivery_fee:Number,
  menu: [foodSchema]
});
restSchema.plugin(passportLocalMongoose);
var Restaurant = mongoose.model("Restaurant", restSchema);
module.exports.Restaurant = Restaurant;
