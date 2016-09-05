var KayakerModel = require("../../models/Kayaker");

function getOneKayaker (req,res) {
	var kayakerId = req.params.username;
	console.log(kayakerId)
	KayakerModel.findOne({username: kayakerId}).exec(function(err, kayaker) {
		if (err) {
			return console.error(err);
		}
		res.json(kayaker);
	});
};

module.exports = getOneKayaker;