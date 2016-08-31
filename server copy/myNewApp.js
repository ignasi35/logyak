// The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');
var app = module.exports = express.createServer();
var PORT = process.env.PORT || 8080;

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/norum');

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

// set up the RESTful API, handler methods are defined in api.js
var api = require('./controllers/api.js');
app.post('/thread', api.post);
app.get('/thread/:title.:format?', api.show);
app.get('/thread', api.list);


app.listen( PORT, function() {
	console.log( 'Now running on port 8080' );
})
