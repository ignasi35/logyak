// grab the user model
var ExcursionModel = require('./server/models/createModule');

			var nameExc = req.body.nameExcursion;
			var dateExc = req.body.dateExcursion;
			var attendeesExc = req.body.attendeesExcursion;
			var distanceExc = req.body.distanceExcursion;
			var timeExc = req.body.timeExcursion;
			var windForceExc = req.body.windForceExcursion;
			var seaConditionsExc = req.body.seaConditionsExcursion;
			var notesExc = req.body.notesExcursion;

// create a new excursion
var newExcursion = ExcursionModel({
	id: ++counter,
	name: nameExc,
	date: dateExc,
	attendees: attendeesExc,
	distance: distanceExc,
	time: timeExc,
	windForce: windForceExc,
	seaConditions: seaConditionsExc,
	notes: notesExc
	});


// save the user
newExcursion.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});