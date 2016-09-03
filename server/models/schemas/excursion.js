var pictureSchema = {
	url: { type: String, required: true }
};

var excursionSchema = {
	id: { type: String, required: true },
	name: { type: String, required: true, trim: true },
	date: { type: String, required: true },
	attendees: { type: String, required: true },
	distance: { type: Number, required: true },
	time: { type: Number, required: true },
	windForce: { type: String, required: true, trim: true },
	seaConditions: { type: String, required: true, trim:true },
	notes: { type: String },
	links: { type: String, trim:true },
	pictures: [pictureSchema]
};

module.exports = excursionSchema;