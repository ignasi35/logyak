var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureSchema = {
	url: { type: String, required: true }
};

var excursionSchema = {
	id: { type: String, required: true },
	name: { type: String, required: true, trim: true },
	date: { type: String, required: true },
	attendees: [{
		type: Schema.Types.ObjectId,
		ref: 'kayaker', 
		required: false 
	}],
	distance: { type: Number, required: true },
	time: { type: Number, required: true },
	windForce: { type: String, required: true, trim: true },
	seaConditions: { type: String, required: true, trim:true },
	notes: { type: String },
	links: { type: String, trim:true },
	pictures: [pictureSchema]
};

var ExcursionSchema = new Schema(excursionSchema);

var ExcursionModel = mongoose.model("excursion", ExcursionSchema);

module.exports = ExcursionModel;


