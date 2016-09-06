var Kayakers = require ('../../models/Kayaker');

function updateKayaker (req,res) {
	var kayakerId = req.params.username;
	var kayaker = req.body;

	Kayakers.findOneAndUpdate (
		{ username: kayakerId } , 
		{ 
			name: kayaker.name,
			surname: kayaker.surname,
			kayak: kayaker.kayak,
			paddle: kayaker.paddle,
			notes: kayaker.notes
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

module.exports = updateKayaker;