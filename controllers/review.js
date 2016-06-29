var models = require('../model/models.js');

//GET - Return all reviews in the DB
exports.findAllReviews = function(req, res) {
    console.log('GET: findAllReviews');
    var findAllReviews = models.Review.findAll();
    findAllReviews.then(function(reviews){
        console.log('GET /reviews');
        for(var i=0; i<reviews.length; i++){
            reviews[i].dataValues._id = reviews[i].dataValues.id.toString();
        }
        res.status(200).jsonp(reviews);
    }).catch(function(error){
        res.send(500, error.message);
    });
};
exports.findByPerson = function(req, res) {
    console.log('GET: findByPerson');
    var findByPerson = models.Review.findAll({
        where: {
            personId: req.params.id
        }
    });
    findByPerson.then(function(reviews){
        console.log('GET /reviews/' + req.params.id);
        for(var i=0; i<reviews.length; i++){
            reviews[i].dataValues._id = reviews[i].dataValues.id.toString();
        }
        res.status(200).jsonp(reviews);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
//GET - Return a review with specified ID
exports.findById = function(req, res) {
    console.log('GET: findById');
    var findById = models.Review.findById(Number(req.params.id));
    findById.then(function(review){
        console.log('GET /review/' + req.params.id);
        review.dataValues._id = review.dataValues.id.toString();
        res.status(200).jsonp(review.dataValues);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
//POST - Insert a new Review in the DB
exports.addReview = function(req, res) {
    console.log('POST: addReview');
    console.log('addReview: ' + JSON.stringify(req.body));

    var review = {
        stars:       req.body.stars,
        description: req.body.description,
        personId:    req.body.personId,
        createDate:  req.body.createDate
    };

    var addReview = models.Review.create(review);

    addReview.then(function(review) {
        review.dataValues._id = review.dataValues.id.toString();
        res.status(200).jsonp(review);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
//PUT - Update a register already exists
exports.updateReview = function(req, res) {
    console.log('PUT: updateReview');

    var review = {
        stars       :req.body.stars,
        description :req.body.description,
        personId    :req.body.personId,
        createDate  :req.body.createDate
    };

    var updateReview = models.Review.update(review, {
      where: {
        id: req.params.id
      }
    });

    updateReview.then(function(review){
        res.status(200).jsonp(review);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
//DELETE - Delete a Review with specified ID
exports.deleteReview = function(req, res) {
    console.log('DELETE: deleteReview');

    var deleteReview = models.Review.destroy({
      where: {
        id: req.params.id
      }
    });

    deleteReview.then(function(review){
        res.status(200).jsonp(review);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
