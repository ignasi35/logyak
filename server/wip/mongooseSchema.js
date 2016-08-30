var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create a Schema
var ExcursionSchema = new Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	date: { type: Date, required: true },
	attendees: { type: String, required: true },
	distance: { type: Number, required: true },
	time: { type: String, required: true },
	windForce: { type: Number, required: true },
	seaConditions: { type: String, required: true },
	notes: { type: String, required: true }
});

var ExcursionModel = mongoose.model('excursion', ExcursionSchema);

// make this available to our users in our Node applications
module.exports = ExcursionModel;