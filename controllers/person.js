var models = require('../model/models.js');

//GET - Return all people in the DB
exports.findAllPeople = function(req, res) {
    console.log('GET: findAllPeople');
    var findAllPeople = models.Person.findAll();
    findAllPeople.then(function(people){
        console.log('GET /people');
        for(var i=0; i<people.length;i++){
            people[i].dataValues['_id'] = people[i].dataValues.id.toString();
        }
        console.log('GET /people RESPONSE: ' + JSON.stringify(people));
        res.status(200).jsonp(people);
    }).catch(function(error){
        res.send(500, error.message);
    });
};
//GET - Return a person with specified ID
exports.findById = function(req, res) {
    console.log('GET: findById');
    var findById = models.Person.findById(Number(req.params.id));
    findById.then(function(person){
        console.log('GET /person/' + req.params.id);
        person.dataValues._id = person.dataValues.id.toString();
        res.status(200).jsonp(person.dataValues);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
//POST - Insert a new Person in the DB
exports.addPerson = function(req, res) {
    console.log('POST: addPerson');
    console.log('addPerson: ' + JSON.stringify(req.body));

    var person = {
        nick:       req.body.nick,
        job:        req.body.job,
        profileImg: req.body.profileImg,
        background: req.body.background
    };

    var addPerson = models.Person.create(person);

    addPerson.then(function(person) {
        person.dataValues._id = person.dataValues.id.toString();
        res.status(200).jsonp(person);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
//PUT - Update a register already exists
exports.updatePerson = function(req, res) {
    console.log('PUT: updatePerson');

    var person = {
        nick       : req.body.nick,
        job        : req.body.job,
        profileImg : req.body.profileImg,
        background : req.body.background
    };

    var updatePerson = models.Person.update(person, {
      where: {
        id: req.params.id
      }
    });

    updatePerson.then(function(person){
        res.status(200).jsonp(person);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
//DELETE - Delete a Person with specified ID
exports.deletePerson = function(req, res) {
    console.log('DELETE: deletePerson');

    var deletePerson = models.Person.destroy({
      where: {
        id: req.params.id
      }
    });

    deletePerson.then(function(person){
        res.status(200).jsonp(person);
    }).catch(function(error){
        res.status(500).send( error.message);
    });
};
