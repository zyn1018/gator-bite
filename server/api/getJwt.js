module.exports = function (req) {
  console.log(req.header());
  return req.id;
}
