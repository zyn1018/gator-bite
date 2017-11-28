var express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  Restaurant = require("../models/restaurant"),
  Order = require("../models/order");
var getJwt = require("./getJwt");

/**
 * get all restaurant to show on page
 */
router.get("/restaurant", function (req, res) {
  Restaurant.find({}, {"hash": 0, "menu": 0}, function (err, rests) {
    if (err) {
      console.log("err");
      res.status(400).send(err);
    } else {
      res.status(200).send(rests);
    }
  });
});


/**
 * get a certain restaurant's dish
 */
router.get("/dishes/:id", function (req, res) {
  var id = req.params.id;
  Restaurant.find({_id: id}, {"hash": 0}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data[0]);
    }
  });
});

/**
 * user submit order
 * save the order in DB
 * return array of orders of this user
 */
router.post("/submitOrder", function (req, res) {
  var userId = getJwt(req);
  var order = new Order;
  order.userId = userId;
  order.username = req.body.username;
  order.restaurantId = req.body.restaurantId;
  order.restaurantName = req.body.restaurantName;
  order.order = req.body.order;
  order.address = req.body.address;
  order.price = req.body.price;
  order.save(function (err, data) {
    if(err) {
      res.status(400).send(err);
    }
    Order.find({"userId": userId}).sort({orderDate: -1}).exec(function (err, orders) {
      if(err){
        res.status(400).send(err);
      }
      res.status(200).send(orders);
    })
  })


});

/**
 * a restaurant get all the orders
 */
router.get("/getOrder", function (req, res) {
  var restId = getJwt(req);
  Order.find({"restaurantId": restId}).sort({orderDate: -1}).exec(function (err, order) {
    if(err){
      res.status(400).send(err);
    }
    res.status(200).send(order)
  })
});

/**
 * a user get all orders
 */
router.get("/getUserOrder", function (req, res) {
  var restId = getJwt(req);
  Order.find({"userId": restId}).sort({orderDate: -1}).exec(function (err, order) {
    if(err){
      res.status(400).send(err);
    }
    res.status(200).send(order)
  })
});

module.exports = router;
