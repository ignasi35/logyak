var excursionSchema = {
	id: { type: Number, required: true },
	name: { type: String, required: true },
	date: { type: String, required: true },
	attendees: { type: String, required: true },
	distance: { type: Number, required: true },
	time: { type: Number, required: true },
	windForce: { type: Number, required: true },
	seaConditions: { type: String, required: true },
	notes: { type: String }
};

module.exports = excursionSchema;