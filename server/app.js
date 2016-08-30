var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require( 'path' );

var app = express();
var PORT = process.env.PORT || 8080;
var MONGODB_URI="mongodb://admin:logyak2016!@ds019746.mlab.com:19746/logyak";
var Schema = mongoose.Schema;

mongoose.connect(MONGODB_URI);


var ExcursionSchema = new Schema({
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

	// app.post ('/create', function(req, res) {
	// 	if (!req.body || !req.body.nameExcursion || !req.body.dateExcursion ||
	// 	!req.body.attendeesExcursion || !req.body.distanceExcursion || 
	// 	!req.body.timeExcursion || !req.body.windForceExcursion || 
	// 	!req.body.seaConditionsExcursion || 
	// 	!req.body.req.body.notesExcursion) { //in case content is void or there is something that it isn't a name (space, char, etc.)
	// 		res.send ("something should be reviewed!");
	// 	}else{
	// 		var nameExc = req.body.nameExcursion;
	// 		var dateExc = req.body.dateExcursion;
	// 		var attendeesExc = req.body.attendeesExcursion;
	// 		var distanceExc = req.body.distanceExcursion;
	// 		var timeExc = req.body.timeExcursion;
	// 		var windForceExc = req.body.windForceExcursion;
	// 		var seaConditionsExc = req.body.seaConditionsExcursion;
	// 		var notesExc = req.body.notesExcursion;

	// 		var newExcursion = {
	// 			id: ++counter,
	// 			name: nameExc,
	// 			date: dateExc,
	// 			attendees: attendeesExc,
	// 			distance: distanceExc,
	// 			time: timeExc,
	// 			windForce: windForceExc,
	// 			seaConditions: seaConditionsExc,
	// 			notes: notesExc
	// 			}

	// 		ExcursionModel
	// 			.insertOne(newExcursion, function(err, result) {
	// 			if (err) throw err;
	// 			res.redirect('/list');
	// 			})
	// 		}
	// 	})

	app.listen( PORT, function() {
		console.log( 'Now running on port 8080' );
	})



