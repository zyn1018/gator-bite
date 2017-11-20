var express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  Restaurant = require("../models/restaurant");

//registration for user
router.post("/register", function (req, res) {
  console.log("has reg");
  var user = new User({email: req.body.email, username: req.body.username});
  console.log(req.body.email);
  user.setPassword(req.body.password);
  User.findOne({"email": user.email}, function (err, indata) {
    if(err){
      res.status(400);
    }
    if(indata){
      res.status(400).send();
    }else{
      user.save(function (err) {
        if(err){
          res.status(400);
          console.log(err)
        }else {
          var token = user.generateJwt();
          res.status(200);
          res.json({
            "user" : user,
            "token": token
          });
        }
      })
    }
  });
})

//registration for restaurant
router.post("/registerRes", function (req, res) {
  console.log("has reg");
  var restaurant = new Restaurant({email: req.body.email, username: req.body.username});
  console.log(req.body.email);
  restaurant.setPassword(req.body.password);
  Restaurant.findOne({"email": restaurant.email}, function (err, indata) {
    if(err){
      console.log(err);
      res.status(400);
    }
    if(indata){
      console.log("repeate");
      res.status(400).send();
    }else{
      restaurant.save(function (err) {
        if(err){
          res.status(400);
          console.log(err)
        }else {
          var token = restaurant.generateJwt();
          res.status(200);
          res.json({
            "resturant" : restaurant,
            "token": token
          });
        }
      })
    }
  });
})

//login for user
router.post("/login", function(req, res){
    var email = req.body.email;
    var pwd = req.body.password;
  console.log(pwd);
  console.log(email);
    User.findOne({"email": email}, function (err, data) {
      if(err){
        console.log(err);
        res.status(400).send();
      }else{
        if(!(data && data.validPassword(pwd))){
          console.log("wrong");
          res.status(400).send();
        }else{
          var token = data.generateJwt();
          res.status(200);
          res.json({
            "restaurant": data,
            "token": token
          });
        }
      }
    })
  }
);
//login for restaurant
router.post("/loginRes", function(req, res){
    var email = req.body.email;
    var pwd = req.body.password;
    Restaurant.findOne({"email": email}, function (err, data) {
      if(err){
        console.log(err);
        res.status(400).send();
      }else{
        if(!(data && data.validPassword(pwd))){
          console.log("wrong");
          res.status(400).send();
        }else{
          var token = data.generateJwt();
          res.status(200);
          res.json({
            "user": data,
            "token": token
          });
        }
      }
    })
  }
);


module.exports = router;
