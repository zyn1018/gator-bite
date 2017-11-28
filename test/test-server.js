var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();
// test userRest: test@zpd.com  123456
var restToken = "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFjYWJhOTdjNGNlNjFhZTA3YjA0MzciLCJlbWFpbCI6InRlc3RAenBkLmNvbSIsImV4cCI6MTUxMjQzMzMyOSwiaWF0IjoxNTExODI4NTI5fQ.wXX0mdRCYpDDqvNuVNtSPLdU4oOFcpLtdt6WorGOIEA\"";
var userToken = "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFjYTA1ZTllMGJiMDUwNjgyMmFjOWYiLCJlbWFpbCI6InRlc3RAenBkLmNvbSIsImV4cCI6MTUxMjQzODAxNiwiaWF0IjoxNTExODMzMjE2fQ.zxT3j3wy8tRTBBQ2aiYaHrJNYYcCNdiqUoeIxMFHEVY\"";

chai.use(chaiHttp);

describe("restaurant case", function () {
  /**
   * done!
   */
/*  it("should register a restaurant on /registerRes post", function (done) {
    chai.request(server)
      .post('/registerRes')
      .type('form')
      .send({'email': 'test1@zpd.com', 'username': 'tdsds', 'password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
        done();
      })
  });*/


  /**
   * done!
   */
  it("should login a restaurant on /loginRes post", function (done) {
    chai.request(server)
      .post('/loginRes')
      .type('form')
      .send({'email': 'test1@zpd.com', 'password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
        restToken = "\"" + res.body.token + "\"";
        done();
      })
  });

  /**
   * done!
   */
  it("should update a restaurant profile on /restUpdate post", function (done) {
    chai.request(server)
      .post('/restUpdate')
      .set({'authentication': restToken})
      .type('form')
      .send({
        'picture': 'https://gainesville.doorstepdelivery.com/media-thumbs/120/location-images/original-american-kitchen.png',
        'type': 'chinese',
        'delivery_fee': '3',
        "address":"asddsas"
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("type");
        done();
      });
  });

  /**
   * done!
   */
  it("should update a menu for a restaurant on /restMenuUpdate post", function (done) {
    chai.request(server)
      .post('/restMenuUpdate')
      .set({'authentication': restToken})
      .type('form')
      .send([{
        "name":"jaja1",
        "price":"13",
        "dishId":"5",
        "desc":"balabala"
      },{
        "name":"jaja2",
        "price":"6",
        "dishId":"6",
        "desc":"balabala"
      }])
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("type");
        res.body.should.have.property("menu");
        done();
      });
  });
});


/**
 * done
 */
describe('user case', function () {
  it('should list all restaurants on /restaurant Get', function (done) {
    chai.request(server)
      .get('/restaurant')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      })
  });

  /**
   * register a user
   * done!
   */
/*  it('should register on /register POST', function (done) {
    chai.request(server)
      .post('/register')
      .type('form')
      .send({'email': 'test1@zpd.com', 'username': 'tdsds', 'password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
        done();
      });
  })*/

  /**
   * login a user
   * done!
   */
  it('should login on /login POST', function (done) {
    chai.request(server)
      .post('/login')
      .type('form')
      .send({'email': 'test1@zpd.com','password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
        userToken = "\"" + res.body.token + "\"";
        done();
      });
  });


  /**
   * done!
   */
  it('should list a menu for a certain restaurant on /dishes/:id GET', function (done) {
    chai.request(server)
      .get('/dishes/5a1caba97c4ce61ae07b0437')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property("menu");
        res.body.menu[0].should.have.property("price");
        res.body.menu[0].should.have.property("desc");
        res.body.menu[0].should.have.property("name");
        done();
      })
  });
})



/**
 * done!
 */

describe("order case", function () {
  it("should submit a order to server on /submitOrder post", function (done) {
    chai.request(server)
      .post('/submitOrder')
      .set({'authentication': userToken})
      .type('form')
      .send({
        "username" : "tdsds",
        "restaurantId": "5a1cb3d84f6db52f686d678e",
        "order":[{
          "name":"asdsda",
          "number":"13"
        },{
          "name":"asdad",
          "number":"12"
        }],
        "address":"jajaa",
        "price":"15",
        "restaurantName":"asdfda"
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property("username");
        res.body[0].should.have.property("order");
        done();
      });
  });

  /**
   * done!
   */
  it("should get all orders for a certain restaurant on /getOrder get", function (done) {
    chai.request(server)
      .get('/getOrder')
      .set({'authentication': restToken})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property("username");
        res.body[0].should.have.property("order");
        done();
      });
  })

});
