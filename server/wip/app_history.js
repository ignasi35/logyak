var express = require( 'express' );
var MongoClient = require('mongodb').MongoClient;
var path = require( 'path' );
var bodyParser = require('body-parser');

var app = express();

// Connection URL
var url = 'mongodb://localhost/logyak';

//set counter to start numbering tasks (id)
var counter = 100;

var _excursion = {}

// for HTML rendering
app.use( express.static( path.join( __dirname, '../client' )) );

//Use connect method to connect to the Server
MongoClient.connect(url, function (err,db) {
	if (err) throw new Error("something failed in the connection");

	//GET request to show data from database
	app.get('/api/excursions', function(req,res) {

		db.collection('excursions').find()
			.toArray(function(err , excursions) {
				res.json(excursions);
			})
	})

	//POST request to get the inputs of the form
	app.post ('/create', function(req, res) {
		if (!req.body || !req.body.nameExcursion || !req.body.dateExcursion ||
		!req.body.attendeesExcursion || !req.body.distanceExcursion || 
		!req.body.timeExcursion || !req.body.windForceExcursion || 
		!req.body.seaConditionsExcursion || 
		!req.body.req.body.notesExcursion) { //in case content is void or there is something that it isn't a name (space, char, etc.)
			res.send ("something should be reviewed!");
		}else{
			var nameExc = req.body.nameExcursion;
			var dateExc = req.body.dateExcursion;
			var attendeesExc = req.body.attendeesExcursion;
			var distanceExc = req.body.distanceExcursion;
			var timeExc = req.body.timeExcursion;
			var windForceExc = req.body.windForceExcursion;
			var seaConditionsExc = req.body.seaConditionsExcursion;
			var notesExc = req.body.notesExcursion;

			var newExcursion = {
				id: ++counter,
				name: nameExc,
				date: dateExc,
				attendees: attendeesExc,
				distance: distanceExc,
				time: timeExc,
				windForce: windForceExc,
				seaConditions: seaConditionsExc,
				notes: notesExc
				}

			db.collection('excursions')
				.insert(newExcursion, function(err, result) {
				if (err) throw err;
				res.redirect('/list');
				})
			}
		})

	app.listen( process.env.PORT || 8080, function() {
		console.log( 'Now running on port 8080' );
	})


});







