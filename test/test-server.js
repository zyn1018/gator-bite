var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();

chai.use(chaiHttp);

describe('default-restaurants', function () {
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
  it('should list a menu for a certain restaurant on /dishes/<email> GET', function (done) {
    chai.request(server)
      .get('/dishes/jaja@asd.com')
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
  it('should validate the login user on /login POST', function (done) {
    chai.request(server)
      .post('/login')
      .send({'email':'zpd@ufl.com','password':'123456'})
      .end(function (err,res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.success.should.equal(1);
        done();
      })
  });
  it('should deny the login user on /login POST', function (done) {
    chai.request(server)
      .post('/login')
      .send({'email':'zpd@ufl.comd','password':'1234567'})
      .end(function (err,res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.success.should.equal(0);
        done();
      })
  })
})
