var express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  Restaurant = require("../models/restaurant");
var getJwt = require("./getJwt");

/**update user profile
 *post method
 *request.json(address, payment)
 * return user object
 */
router.post("/userUpdate", function (req, res) {
  var id = getJwt(req);
  User.findById(id, function (err, user) {
    if (err) {
      res.status(400).send(err);
    } else {
      user.address = req.body.address || user.address;
      user.payment = req.body.payment || user.payment;
    }

    user.save(function (err, user) {
      if (err) {
        res.status(400).send(err);
      }
      res.status(200).send(user);
    })
  })
});

module.exports = router;
