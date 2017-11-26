var mongoose = require("mongoose")

var foodSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

var orderSchema = new mongoose.Schema({
  userId: String,
  restaurantId: String,
  order: [foodSchema],
  count: [Number],
  address: String,
  done: Boolean
})

var Order = mongoose.models("orders", orderSchema);
module.exports = Order;
