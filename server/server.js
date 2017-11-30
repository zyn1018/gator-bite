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

app.listen(3000, process.env.IP, function () {
  console.log("server is running");
});

