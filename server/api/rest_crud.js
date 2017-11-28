var express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  Restaurant = require("../models/restaurant");
var getJwt = require("./getJwt");


/**
 * restaurant profile update
 * req.json{picture, }
 */
router.post("/restUpdate", function (req, res) {
  var id = getJwt(req);
  Restaurant.findById(id, function (err, restaurant) {
    if (err) {
      res.status(400).send(err);
    } else {
      restaurant.picture = req.body.picture || restaurant.picture || null;
      restaurant.type = req.body.type || restaurant.type;
      restaurant.delivery_fee = req.body.delivery_fee || restaurant.delivery_fee;
      restaurant.address = req.body.address || restaurant.address;
      restaurant.save(function (err, data) {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send(data);
      })
    }

  })
});


/**
 * update menu for a restaurant
 */
router.post("/restMenuUpdate", function (req, res) {
  console.log("update menu");
  var id = getJwt(req);
  Restaurant.findById(id, function (err, restaurant) {
    if (err) {
      res.status(400).send(err);
    } else {
      restaurant.menu = req.body || restaurant.menu;
      restaurant.save(function (err, data) {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send(data);
      })
    }

  })
});


module.exports = router;
