var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require( 'path' );

var app = express();
var PORT = process.env.PORT || 8080;
var MONGODB_URI="mongodb://admin:logyak2016!@ds019746.mlab.com:19746/logyak";

mongoose.connect(MONGODB_URI);

var ExcursionSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	date: { type: String, required: true },
	attendees: { type: String, required: true },
	distance: { type: Number, required: true },
	time: { type: String, required: true },
	windForce: { type: Number, required: true },
	seaConditions: { type: String, required: true },
	notes: { type: String, required: true }
});


// for HTML rendering
app.use( express.static( path.join( __dirname, '../client' )) );


// will use the collection -> excursions
var ExcursionModel = mongoose.model("excursion", ExcursionSchema);

	app.get('/api/excursions', function(req,res) {
		ExcursionModel.find({}).sort({date: -1}).exec(function(err, excursions) {
			if (err) return console.error(err);
			res.json(excursions);
		})
	})

	app.listen( PORT, function() {
		console.log( 'Now running on port 8080' );
	})

