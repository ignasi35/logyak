var KayakerModel = require("../../models/Kayaker");

function getAllKayakers (req,res) {
	KayakerModel
		.find({})
		.exec(function(err, kayakers) {
		if (err) return console.error(err);
			res.json(kayakers);
		});
};

module.exports = getAllKayakers;