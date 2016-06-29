var express = require('express'),
  personCtrl = require('../controllers/person');
// API routes
var personRoute = express.Router();

personRoute.route('/people')
  .get(personCtrl.findAllPeople);

personRoute.route('/person')
  .post(personCtrl.addPerson);

personRoute.route('/person/:id')
  .get(personCtrl.findById)
  .put(personCtrl.updatePerson)
  .delete(personCtrl.deletePerson);

module.exports = personRoute;