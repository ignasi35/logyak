var myExcursion = require ('../../models/Excursion');

function createExcursion (req, res) {
	if (!req.body || !req.body.name || !req.body.date ||
		!req.body.distance || 
		!req.body.time || !req.body.windForce || 
		!req.body.seaConditions ) { 
		//in case content is void or there is something that it isn't a name (space, char, etc.)
		res.send ("please, check all fields!");
	}
	else{
		var nameExc = req.body.name;
		var dateExc = req.body.date;
		var distanceExc = req.body.distance;
		var timeExc = req.body.time;
		var windForceExc = req.body.windForce;
		var seaConditionsExc = req.body.seaConditions;
		var notesExc = req.body.notes;
		var linksExc = req.body.links;

		var creationDate = (new Date())/1000;
		var mergeNames = dateExc + "-" + nameExc + "-" + creationDate;
		var id = mergeNames.replace(/ /g,'_');

		var newExcursion = new myExcursion({
			// detect duplicate 'id' and avoid them (use a random code at the end)
			id: id,  //to be reviewed. ID must be set automatically
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
				res.location('/api/excursions/' + result.id);
				res.sendStatus(201);
			})
		}
	}
module.exports = createExcursion;
