var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();
// test userRest: test@zpd.com  123456
var restToken = "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFkYzZkYjU4NDIyNmQ2OGQwNGVkM2QiLCJlbWFpbCI6ImFuZGF6aW5kaWFuQGdhdG9yYml0ZS5jb20iLCJleHAiOjE1MTI2NzAyMjcsImlhdCI6MTUxMjA2NTQyN30.jviIogqpvqqO0X1_V9Y6YbZAbpfuCGn3aGeH2K1qzms\"";
var userToken = "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFjZWRkYjQ4Y2IxN2NiNmUyNWY2M2EiLCJlbWFpbCI6InVzZXJ0ZXN0QGdtYWlsLmNvbSIsImV4cCI6MTUxMjY3MDA3MywiaWF0IjoxNTEyMDY1MjczfQ.0BFpE2sxJTU-9jvoxBMmaamZ-NYleT12Bqr6pKdL-ek\"";
chai.use(chaiHttp);

describe("restaurant case", function () {
  /**
   * done!
   */
  it("should register a restaurant on /registerRes post", function (done) {
    chai.request(server)
      .post('/registerRes')
      .type('form')
      .send({'email': 'andazindian@gatorbite.com', 'username': 'Andaz Indian', 'password': '123456'})
      .end(function (err, res) {
        res.should.have.status(400);
        done();
      })
  });


  /**
   * done!
   */
  it("should login a restaurant on /loginRes post", function (done) {
    chai.request(server)
      .post('/loginRes')
      .type('form')
      .send({'email': 'andazindian@gatorbite.com', 'password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
        // restToken = "\"" + res.body.token + "\"";
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
        'type': 'Chinese',
        'delivery_fee': '3',
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
  it('should register on /register POST', function (done) {
    chai.request(server)
      .post('/register')
      .type('form')
      .send({'email': 'test@zpd.com', 'username': 'tdsds', 'password': '123456'})
      .end(function (err, res) {
        res.should.have.status(400);
        done();
      });
  })

  /**
   * login a user
   * done!
   */
  it('should login on /login POST', function (done) {
    chai.request(server)
      .post('/login')
      .type('form')
      .send({'email': 'usertest@gmail.com','password': '123456'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property("token");
        done();
      });
  });


  /**
   * done!
   */
  it('should list a menu for a certain restaurant on /dishes/:id GET', function (done) {
    chai.request(server)
      .get('/dishes/5a1dc6db584226d68d04ed3d')
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
        "username" : "usertest@gmail.com",
        "restaurantId": "5a1dc6db584226d68d04ed3d",
        "order":[{
          "name":"asdsda",
          "number":"13"
        },{
          "name":"asdad",
          "number":"12"
        }],
        "address":"jajaa",
        "price":"15",
        "restaurantName":"Andaz Indian"
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
      .set({'authentication': restToken
      })
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
