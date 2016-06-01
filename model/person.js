var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


var personSchema = new Schema({
  nick:       { type: String },
  job:        { type: String },
  profileImg: { type: String },
  background: { type: String }
});

module.exports = mongoose.model('Person', personSchema);