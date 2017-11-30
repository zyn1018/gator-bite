var mongoose = require("mongoose")

var foodSchema = new mongoose.Schema({
  name: String,
  number: Number,
});
// var localDate = new Date();
// var localTime = localDate.getTime();
// var localOffset = localDate.getTimezoneOffset() * 60 * 1000;
// var date = new Date(localTime - localOffset);
var orderSchema = new mongoose.Schema({
  userId: String,
  username: String,
  restaurantName: String,
  restaurantId: String,
  order: [foodSchema],
  address: String,
  done: Boolean,
  price: Number,
  orderDate: {type: Date, default: Date.now()}
});

var Order = mongoose.model("orders", orderSchema);
module.exports = Order;
