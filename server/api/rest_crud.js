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
  console.log("update menu");
  var id = getJwt(req);
  Restaurant.findById(id, function (err, restaurant) {
    if (err) {
      res.status(400).send(err);
    } else {
      restaurant.picture = req.body.picture || restaurant.picture || null;
      restaurant.type = req.body.type || restaurant.type;
      restaurant.delivery_fee = req.body.delivery_fee || restaurant.delivery_fee;
      restaurant.menu = req.body.menu || restaurant.menu;
      console.log(req.body.menu);

      restaurant.save(function (err, data) {
        if(err) {
          res.status(400).send(err);
        }
        res.status(200).send(data);
      })
   }

  })
});


module.exports = router;
