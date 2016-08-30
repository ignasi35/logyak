var express = require( 'express' );
var MongoClient = require('mongodb').MongoClient;
var path = require( 'path' );
var bodyParser = require('body-parser');

var app = express();

// Connection URL
var url = 'mongodb://localhost/logyak';

// for HTML rendering
app.use( express.static( path.join( __dirname, '../client' )) );

//Use connect method to connect to the Server
MongoClient.connect(url, function (err,db) {
	if (err) throw new Error("something failed in the connection");

	app.get('/api/excursions', function(req,res) {

		db.collection('excursions').find()
			.toArray(function(err , excursions) {
				res.json(excursions);
			})

	})

	app.listen( process.env.PORT || 8080, function() {
		console.log( 'Now running on port 8080' );
	})


})







