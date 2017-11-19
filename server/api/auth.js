var express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  Restaurant = require("../models/restaurant"),
  passport = require("passport");


router.post("/register", function (req, res) {
  console.log("has reg");
  var user = new User({email: req.body.email, username: req.body.username});
  console.log(req.body);
  User.register(user, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.json({
        error: err
      });
    }
    passport.authenticate("local")(req, res, function () {
      console.log("sucssssss");
      return res.json({
        state: "register successful"
      });
    })
  })
})

module.exports = router;
