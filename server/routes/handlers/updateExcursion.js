var Excursions = require ('../../models/Excursion');

function updateExcursion (req,res) {
	var excursionId = req.params.id;
	var excursion = req.body;

	Excursions.findOneAndUpdate (
		{ id: excursionId } , 
		{ 
			date: excursion.date,
			distance: excursion.distance,
			time: excursion.time,
			windForce: excursion.windForce,
			seaConditions: excursion.seaConditions,
			notes: excursion.notes,
			links: excursion.links,
			attendees: excursion.attendees.map(function(att){return att._id;}) 
		},
		function (err, excursion){
			if (err) {
				res.send(err);
			}
			else {
				res.sendStatus(204);
			}
	});
};

module.exports = updateExcursion;