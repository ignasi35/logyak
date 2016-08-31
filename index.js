var app = require('./server/app');
var db = require('./server/db');

var MONGODB_URI= process.env.DB_URI || "mongodb://admin:logyak2016!@ds019746.mlab.com:19746/logyak";
var PORT = process.env.PORT || 8080;

db.open(MONGODB_URI);

app.listen( PORT, function() {
	console.log( 'Now running on port 8080' );
})

// var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var path = require( 'path' );

// var app = express();
// var PORT = process.env.PORT || 8080;
// var MONGODB_URI="mongodb://admin:logyak2016!@ds019746.mlab.com:19746/logyak";
// var Schema = mongoose.Schema;

// mongoose.connect(MONGODB_URI);


// var ExcursionSchema = new Schema({
// 	id: { type: Number, required: true },
// 	name: { type: String, required: true },
// 	date: { type: String, required: true },
// 	attendees: { type: String, required: true },
// 	distance: { type: Number, required: true },
// 	time: { type: Number, required: true },
// 	windForce: { type: Number, required: true },
// 	seaConditions: { type: String, required: true },
// 	notes: { type: String }
// });


// // for HTML rendering
// app.use( express.static( path.join( __dirname, '../client' )) );

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))


// // will use the collection -> excursions
// var ExcursionModel = mongoose.model("excursion", ExcursionSchema);


// 	app.get('/api/excursions', function(req,res) {
// 		ExcursionModel.find({}).sort({date: -1}).exec(function(err, excursions) {
// 			if (err) return console.error(err);
// 			res.json(excursions);
// 		})
// 	})

// 	app.post ('/api/excursions', function(req, res) {
// 		if (!req.body || !req.body.nameExcursion || !req.body.dateExcursion ||
// 		!req.body.attendeesExcursion || !req.body.distanceExcursion || 
// 		!req.body.timeExcursion || !req.body.windForceExcursion || 
// 		!req.body.seaConditionsExcursion ) { //in case content is void or there is something that it isn't a name (space, char, etc.)
// 			process.stdout.write(req.body.attendeesExcursion);
// 			res.send ("something should be reviewed!");
// 		}else{
// 			var nameExc = req.body.nameExcursion;
// 			var dateExc = req.body.dateExcursion;
// 			var attendeesExc = req.body.attendeesExcursion;
// 			var distanceExc = req.body.distanceExcursion;
// 			var timeExc = req.body.timeExcursion;
// 			var windForceExc = req.body.windForceExcursion;
// 			var seaConditionsExc = req.body.seaConditionsExcursion;
// 			var notesExc = req.body.notesExcursion;

// 			var newExcursion = new ExcursionModel({
// 				id: 23,
// 				name: nameExc,
// 				date: dateExc,
// 				attendees: attendeesExc,
// 				distance: distanceExc,
// 				time: timeExc,
// 				windForce: windForceExc,
// 				seaConditions: seaConditionsExc,
// 				notes: notesExc
// 				})

// 			newExcursion.save( function(err, result) {
// 					if (err) throw err;
// 					res.redirect('/list');
// 				})
// 			}
// 		})





