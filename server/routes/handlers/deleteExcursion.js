var Excursions = require ('../../models/Excursion');

function deleteExcursion (req,res) {
	var excursionId = req.params.id;

	console.log("Deleting excursion " + excursionId)

	Excursions.remove ({id:excursionId} , function (err) {
		if (err) 
			res.send(err);
		res.send("");
	});

};

module.exports = deleteExcursion;