var mongoose = require('mongoose');
var Person  = mongoose.model('Person');

//GET - Return all people in the DB
exports.findAllPeople = function(req, res) {
    console.log('GET: findAllPeople');
    Person.find(function(err, people) {
    if(err) res.send(500, err.message);

    console.log('GET /people')
        res.status(200).jsonp(people);
    });
};
//GET - Return a person with specified ID
exports.findById = function(req, res) {
    console.log('GET: findById');
    Person.findById(req.params.id, function(err, person) {
    if(err) return res.status(500).send( err.message);

    console.log('GET /person/' + req.params.id);
        res.status(200).jsonp(person);
    });
};
//POST - Insert a new Person in the DB
exports.addPerson = function(req, res) {
    console.log('POST: addPerson');
    console.log('addPerson: ' + req.body);

    var person = new Person({
        nick:       req.body.nick,
        job:        req.body.job,
        profileImg: req.body.profileImg,
        background: req.body.background
    });

    person.save(function(err, person) {
      if(err) return res.status(500).send( err.message);
      res.status(200).jsonp(person);
    });
};
//PUT - Update a register already exists
exports.updatePerson = function(req, res) {
    console.log('PUT: updatePerson');
    Person.findById(req.params.id, function(err, person) {
        person.nick       = req.body.nick;
        person.job        = req.body.job;
        person.profileImg = req.body.profileImg;
        person.background = req.body.background;

        person.save(function(err) {
          if(err) return res.status(500).send(err.message);
          res.status(200).jsonp(person);
        });
    });
};
//DELETE - Delete a Person with specified ID
exports.deletePerson = function(req, res) {
    console.log('DELETE: deletePerson');
    Person.findById(req.params.id, function(err, person) {
        person.remove(function(err) {
          if(err) return res.status(500).send(err.message);
          res.status(200).send();
        })
    });
};