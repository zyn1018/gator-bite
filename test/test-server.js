var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();
// test user: test@zpd.com  123456
var restToken = "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFjYWJhOTdjNGNlNjFhZTA3YjA0MzciLCJlbWFpbCI6InRlc3RAenBkLmNvbSIsImV4cCI6MTUxMjQzMzMyOSwiaWF0IjoxNTExODI4NTI5fQ.wXX0mdRCYpDDqvNuVNtSPLdU4oOFcpLtdt6WorGOIEA\"";


chai.use(chaiHttp);

describe("restaurant case", function () {
/*  it("should register a restaurant on /registerRes post", function (done) {
    chai.request(server)
      .post('/registerRes')
      .type('form')
      .send({'email': 'test@zpd.com', 'username': 'tdsds', 'password': '123456'})
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
      .send({'email': 'test@zpd.com', 'password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
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
        'delivery_fee': '3'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("type");
        done();
      });
  });


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

      }])
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("type");
        done();
      });
  });
});

describe("order case", function () {
  it("should submit a order to server on /submitOrder post", function (done) {

  });

  it("should get all orders for a certain restaurant on /getOrder get", function (done) {

  })

});

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
   */
/*  it('should register on /register POST', function (done) {
    chai.request(server)
      .post('/register')
      .type('form')
      .send({'email': 'test@zpd.com', 'username': 'tdsds', 'password': '123456'})
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
   */
  it('should login on /login POST', function (done) {
    chai.request(server)
      .post('/login')
      .type('form')
      .send({'email': 'test@zpd.com','password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
        done();
      });
  });

  it('should list a menu for a certain restaurant on /dishes/:id GET', function (done) {
    chai.request(server)
      .get('/dishes/5a1b47d31e1dd6b45b6b129d')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property("menu");
        console.log(res.body.menu[0]);
        res.body.menu[0].should.have.property("price");
        res.body.menu[0].should.have.property("desc");
        res.body.menu[0].should.have.property("name");
        done();
      })
  });
})

