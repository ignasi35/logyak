var myKayaker = require ('../../models/Kayaker');

function createKayaker (req, res) {
	if (!req.body || !req.body.name || !req.body.surname ||
		!req.body.kayak || 
		!req.body.paddle) { 
		//in case content is void or there is something that it isn't a name (space, char, etc.)
		res.send ("please, check all fields!");
	}
	else{
		var nameKayaker = req.body.name;
		var surnameKayaker = req.body.surname;
		var rankingKayaker = 0;
		var milesKayaker = 0;
		var kayakKayaker = req.body.kayak;
		var paddleKayaker = req.body.paddle;
		var notesKayaker = req.body.notes;


		var creationDate = (new Date())/1000;
		var mergeNames = nameKayaker + "-" + surnameKayaker + "-" + creationDate;
		var username = mergeNames.replace(/ /g,'_');

		var newKayaker = new myKayaker({
			// detect duplicate 'id' and avoid them (use a random code at the end)
			name: nameKayaker,
			surname: surnameKayaker,
			ranking: 0,
			miles: 0,
			username: username,
			kayak: kayakKayaker,
			paddle: paddleKayaker,
			notes: notesKayaker,
			})

		newKayaker.save( function(err, result) {
				if (err) throw err;
				res.location('/api/kayakers/' + result.username);
				res.sendStatus(201);
			})
		}
	}
module.exports = createKayaker;
