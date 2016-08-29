var express = require( 'express' );
var MongoClient = require('mongodb').MongoClient;
var path = require( 'path' );
var bodyParser = require('body-parser')

var app = express();

// for HTML rendering
app.use( express.static( path.join( __dirname, 'appClient' )) );
app.use( express.static( path.join( __dirname, 'public' )) );

app.listen( process.env.PORT || 8080, function() {
	console.log( 'Now running on port 8080' );
});




