let expect = require('chai').expect;
let request = require('request');

let url = 'http://localhost:5500/api/cat';

let cat = {
    title: 'Cat',
    subTitle: 'Cat',
    path: 'Images/kitten.png',
    description: 'Cat'
}

// Getting the data
describe('GET API : kitten', function () {
    it('returns status code of 200', function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
// returning the error status code of data
    it('return status code of 404', function (done) {
        request('http://localhost:5500/api/cats', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    // returning the success status code of data
    it('return succesful message', function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('success');
            done();
        });
    });

    it('returns an array', function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

//Posting the Cat data
describe('post API a kitten:', function () {
    it('insert a cat to database and statuscode 200', function (done) {
        request.post({ url: url, form: cat }, function (error, response, body) {
            let bodyObj = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(bodyObj.message).to.contain('success');
            done();
        });
    });

    it('Testing the post cat as json response', function (done) {
        request.post({ url: url, form: cat }, function (error, response, body) {
            let bodyObj = JSON.parse(body);
            expect(bodyObj.data.acknowledged).to.equal(true);
            expect(bodyObj.message).to.equal("success");
            done();
        });
    });
});

//Deleting the cat data
describe('Deleting a Cat:', function () {
    it('delete a cat from database', function (done) {
        request.delete({ url: url, form: cat }, function (error, response, body) {
            let bodyObj = JSON.parse(body);
            // console.log(bodyObj);
            expect(bodyObj.message).to.contain('success');
            done();
        });
    });
});