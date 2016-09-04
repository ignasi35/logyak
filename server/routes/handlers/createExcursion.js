var myExcursion = require ('../../models/Excursion');

function createExcursion (req, res) {
	if (!req.body || !req.body.nameExcursion || !req.body.dateExcursion ||
		!req.body.distanceExcursion || 
		!req.body.timeExcursion || !req.body.windForceExcursion || 
		!req.body.seaConditionsExcursion ) { 
		//in case content is void or there is something that it isn't a name (space, char, etc.)
		
		res.send ("please, check all fields!");
	}
	else{
		var nameExc = req.body.nameExcursion;
		var dateExc = req.body.dateExcursion;
		var distanceExc = req.body.distanceExcursion;
		var timeExc = req.body.timeExcursion;
		var windForceExc = req.body.windForceExcursion;
		var seaConditionsExc = req.body.seaConditionsExcursion;
		var notesExc = req.body.notesExcursion;
		var linksExc = req.body.linksExcursion;

		var newExcursion = new myExcursion({
			id: dateExc + "-" + nameExc,  //to be reviewed. ID must be set automatically
			name: nameExc,
			date: dateExc,
			distance: distanceExc,
			time: timeExc,
			windForce: windForceExc,
			seaConditions: seaConditionsExc,
			notes: notesExc,
			links: linksExc,
			pictures: []
			})

		newExcursion.save( function(err, result) {
				if (err) throw err;
				res.redirect('/');
			})
		}
	}
module.exports = createExcursion;
