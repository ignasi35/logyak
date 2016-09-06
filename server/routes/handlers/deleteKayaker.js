var Kayakers = require ('../../models/Kayaker');

function deleteKayaker (req,res) {
	var kayakerId = req.params.username;

	console.log("Deleting excursion " + kayakerId)

	Kayakers.remove ({ username : kayakerId } , function (err) {
		if (err) 
			res.send(err);
		res.send("");
	});

};

module.exports = deleteKayaker;