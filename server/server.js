var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  mongoose = require('mongoose'),
  User = require('./models/user'),
  Restaurant = require("./models/restaurant").Restaurant;
LocalStrategy = require("passport-local"),
  passport = require("passport"),
  authRouter = require("./api/auth"),
  passportLocalMongoose = require("passport-local-mongoose");

module.exports = app;
mongoose.connect('mongodb://senb:slksl@ds121535.mlab.com:21535/gator-bite', {useMongoClient: true});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extende: true}));
app.use(bodyParser.json());
app.use(require("express-session")({
  secret: "winner winner chicken dinner",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(Restaurant.authenticate()));
passport.serializeUser(Restaurant.serializeUser());
passport.deserializeUser(Restaurant.deserializeUser());
app.use("/api", authRouter);

//define a restaurant class
/*var restSchema = new mongoose.Schema({
  email: String,
  password: String,
  picture: String,
  type: Array,
  delivery_fee: Number,
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
});
var User = mongoose.model("users", userSchema);*/

//for default search

app.get("/restaurant", function (req, res) {
  Restaurant.find({}, {"password": 0, "menu": 0}, function (err, rests) {
    if (err) {
      console.log("err");
    } else {
      res.send(rests);
    }
  });
});

//get a certain restaurant's dish
app.get("/dishes/:email", function (req, res) {
  var email = req.params.email;
  Restaurant.find({email: email}, {"menu": 1, "_id": 0}, function (err, menues) {
    if (err) {
      console.log(err);
    } else {
      res.send(menues[0]);
    }
  });
});

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

