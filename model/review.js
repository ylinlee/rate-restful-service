var mongoose = require('mongoose'), 
    Schema   = mongoose.Schema;

var reviewSchema = new Schema({
  personId:    { type: String },
  stars:       { type: Number },
  description: { type: String },
  createDate:  { type: Date }
});

module.exports = mongoose.model('Review', reviewSchema);