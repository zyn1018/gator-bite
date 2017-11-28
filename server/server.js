var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  mongoose = require('mongoose'),
  User = require('./models/user'),
  Restaurant = require("./models/restaurant");
LocalStrategy = require("passport-local"),
  passport = require("passport"),
  passportLocalMongoose = require("passport-local-mongoose");

var authRouter = require("./api/auth");
var restRouter = require("./api/rest_crud");
var userRouter = require("./api/user_crud");
var orderRouter = require("./api/order_router");
var db = require("./config.json").db;
module.exports = app;
mongoose.connect(db, {useMongoClient: true});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extende: true}));
app.use(bodyParser.json());
app.use(authRouter);
app.use(restRouter);
app.use(userRouter);
app.use(orderRouter);


//define a restaurant class
/*var restSchema = new mongoose.Schema({
  email: String,
  password: String,
  picture: String,
  type: Array,
  delivery_fee:Number,
  menu: Array
});
var Restaurant = mongoose.model("Restaurant", restSchema);
var r1 = new Restaurant({
  email: "jaja@asd.com",
  picture:"https://assets.bitesquad.com/media-thumbs/120/location-images/Kabab-House-%28Orlando,-FL%29.jpg",
  type: ["Indian","Pakistani"],
  menu: [{name:"10 Boneless Wings",price:"8.99", desc:"10 boneless wings with multiple flavors" }]
});

//define a user class
var userSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String
});*/
/*var User = mongoose.model("users", userSchema);*/

//for default search


//login api
/*app.post("/login", function (req, res) {
  var lemail = req.body.email;
  var lpassword = req.body.password;
  Schema.User.find({$and:[{email: lemail}, {password: lpassword}]}, function (err, user) {
    if(err){
      Restaurant.find({$and:[{email: lemail}, {password: lpassword}]}, function (err, user){
        if(err){
          res.send({"success":0});
        }else{
          res.render("/dishes/" + lemail);
        }
      });
    }else{
      res.send({"success":1});
    }
  });
});*/


app.listen(3000, process.env.IP, function () {
  console.log("server is running");
});

