var mongoose = require("mongoose")

var foodSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

var orderSchema = new mongoose.Schema({
  userId: String,
  restaurantId: String,
  restaurantName: String,
  restaurantId: String,
  order: [foodSchema],
  address: String,
  done: Boolean,
  price: Number,
  orderDate: {type: Date, default: Date.now}
});

var Order = mongoose.model("orders", orderSchema);
module.exports = Order;
