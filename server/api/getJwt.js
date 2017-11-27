var jwt = require('jsonwebtoken');
var secret = require("../config.json").secret

module.exports = function (req) {
  var token = req.header("authentication");
  token = token.substring(1, token.length - 1);
  var decoded = jwt.verify(token, secret);
  return(decoded._id);
}


// var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFiNjVlNTY2OTM3ODBiNjgwMTBhZWIiLCJlbWFpbCI6InRlc3RAZy5nIiwiZXhwIjoxNTEyMzUwMTk0LCJpYXQiOj" +
//   "E1MTE3NDUzOTR9.q-iPLWeCi3zTsXGARdboK0Zv0NcycszWVQ3U6ToFCtg";
//
// var decoded = jwt.verify(token, secret);
// console.log("token:")
// console.log(token);
// console.log("dec");
// console.log(decoded);
