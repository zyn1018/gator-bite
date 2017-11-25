var express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  Restaurant = require("../models/restaurant");
var getJwt = require("./getJwt");

router.post("userUpdate", function (req, res) {
  var id = getJwt(req);
  User.findById(id, function (err, user) {
    if(err){
      res.status(400).send(err);
    }else{

    }
  })
});

