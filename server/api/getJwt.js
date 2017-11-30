var jwt = require('jsonwebtoken');
var secret = require("../config.json").secret

module.exports = function (req) {
  var token = req.header("authentication");
  token = token.substring(1, token.length - 1);
  var decoded = jwt.verify(token, secret);
  return(decoded._id);
};
