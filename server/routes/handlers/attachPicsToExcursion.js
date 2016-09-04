var Excursions = require ('../../models/Excursion');

function attachPicsToExcursion (req,res) {
	var excursionId = req.params.id;
	var excursionUrl = req.body.imageUrl;

	Excursions.findOneAndUpdate (
		{ id: excursionId } , 
		{ $push: {'pictures': { url: excursionUrl } } },
		function (err, excursion){
			if (err) {
				res.send(err);
			}
			else {
				res.sendStatus(204);
			}
	});

};

module.exports = attachPicsToExcursion;