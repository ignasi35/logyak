var myExcursion = require ('../../models/Excursion')

function createExcursion (req, res) {
	if (!req.body || !req.body.nameExcursion || !req.body.dateExcursion ||
		!req.body.attendeesExcursion || !req.body.distanceExcursion || 
		!req.body.timeExcursion || !req.body.windForceExcursion || 
		!req.body.seaConditionsExcursion ) { 
		//in case content is void or there is something that it isn't a name (space, char, etc.)
		
		process.stdout.write(req.body.attendeesExcursion);
		
		res.send ("please, check all fields!");
	}
	else{
		var nameExc = req.body.nameExcursion;
		var dateExc = req.body.dateExcursion;
		var attendeesExc = req.body.attendeesExcursion;
		var distanceExc = req.body.distanceExcursion;
		var timeExc = req.body.timeExcursion;
		var windForceExc = req.body.windForceExcursion;
		var seaConditionsExc = req.body.seaConditionsExcursion;
		var notesExc = req.body.notesExcursion;

		var newExcursion = new myExcursion({
			id: 23,  //to be reviewed. ID must be set automatically
			name: nameExc,
			date: dateExc,
			attendees: attendeesExc,
			distance: distanceExc,
			time: timeExc,
			windForce: windForceExc,
			seaConditions: seaConditionsExc,
			notes: notesExc
			})

		newExcursion.save( function(err, result) {
				if (err) throw err;
				res.redirect('/');
			})
		}
	}
module.exports = createExcursion;
