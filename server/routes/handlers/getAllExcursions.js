var ExcursionModel = require("../../models/Excursion");

function getAllExcursions (req,res) {
	ExcursionModel
		.find({})
		.populate('attendees')
		.sort({date: -1})
		.exec(function(err, excursions) {
			if (err) return console.error(err);
			res.json(excursions);
		});
		console.log('attendees')
};

module.exports = getAllExcursions;