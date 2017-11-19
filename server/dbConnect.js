var mongoose = require('mongoose');

mongoose.connect('mongodb://senb:slksl@ds121535.mlab.com:21535/gator-bite');

var restSchema = new mongoose.Schema({
  name: String,
  picture: String,
  type: Array,
  delivery_fee: Number
});

var Restaurant = mongoose.model("Restaurant", restSchema);

var r1 = new Restaurant({
  name: "jaja",
  picture: "https://assets.bitesquad.com/media-thumbs/120/location-images/Kabab-House-%28Orlando,-FL%29.jpg",
  type: ["Indian", "Pakistani"]

});

r1.save(function (err, rest) {
  if (err) {
    console.log(err);
  } else {
    console.log("save");
    console.log(rest);
  }
})
