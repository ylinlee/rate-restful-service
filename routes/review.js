var express = require('express'),
  reviewModel = require('../model/review'),
  reviewCtrl = require('../controllers/review');
// API routes
var reviewRoute = express.Router();

reviewRoute.route('/reviews/:id')
  .get(reviewCtrl.findByPerson);

reviewRoute.route('/review/')
  .post(reviewCtrl.addReview);

reviewRoute.route('/review/:id')
  .get(reviewCtrl.findById)
  .put(reviewCtrl.updateReview)
  .delete(reviewCtrl.deleteReview);

module.exports = reviewRoute;