var express = require('express'),  
    app = express(),
    bodyParser  = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    personRoute = require('./routes/people'),
    reviewRoute = require('./routes/review');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Add headers
app.use('/*', function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', process.env.HOST || 'http://localhost:3000');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/apiPeople', personRoute);
app.use('/apiReviews', reviewRoute);

mongoose.connect('mongodb://localhost/person', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(process.env.PORT || 3001, function() {  
    console.log('API REST server running on http://localhost:3001');
    console.log('================================================');
  });
});
