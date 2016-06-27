var mongoose = require('mongoose');
var Review  = mongoose.model('Review');

//GET - Return all reviews in the DB
exports.findAllReviews = function(req, res) {
    console.log('GET: findAllReviews');
    Review.find(function(err, reviews) {
        if(err) res.send(500, err.message);

        console.log('GET /reviews');
        res.status(200).jsonp(reviews);
    });
};
exports.findByPerson = function(req, res) {
    console.log('GET: findByPerson');
    Review.find({ personId: req.params.id }, function(err, reviews) {
        if(err) res.send(500, err.message);

        console.log('GET /reviews/' + req.params.id);
        res.status(200).jsonp(reviews);
    });
};
//GET - Return a review with specified ID
exports.findById = function(req, res) {
    console.log('GET: findById');
    Review.findById(req.params.id, function(err, review) {
        if(err) return res.status(500).send( err.message);

        console.log('GET /review/' + req.params.id);
        res.status(200).jsonp(person);
    });
};
//POST - Insert a new Review in the DB
exports.addReview = function(req, res) {
    console.log('POST: addReview');
    console.log('addReview: ' + JSON.stringify(req.body));

    var review = new Review({
        stars:       req.body.stars,
        description: req.body.description,
        personId:      req.body.personId,
        createDate:  req.body.createDate
    });

    review.save(function(err, review) {
      if(err) return res.status(500).send( err.message);
      res.status(200).jsonp(review);
    });
};
//PUT - Update a register already exists
exports.updateReview = function(req, res) {
    console.log('PUT: updateReview');
    Review.findById(req.params.id, function(err, review) {
        review.stars       = req.body.stars;
        review.description = req.body.description;
        review.personId      = req.body.personId;
        review.createDate  = req.body.createDate;

        review.save(function(err) {
          if(err) return res.status(500).send(err.message);
          res.status(200).jsonp(review);
        });
    });
};
//DELETE - Delete a Review with specified ID
exports.deleteReview = function(req, res) {
    console.log('DELETE: deleteReview');
    Review.findById(req.params.id, function(err, review) {
        review.remove(function(err) {
          if(err) return res.status(500).send(err.message);
          res.status(200).send();
        });
    });
};