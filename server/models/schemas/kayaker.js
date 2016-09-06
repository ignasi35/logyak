var kayakerSchema = {
	name: { type: String, required: true, trim: true },
	surname: { type: String, required: true, trim: true },
	ranking: { type: Number },
	miles: { type: Number },
	username: { type: String, required: true, trim: true },
	kayakMaterial: { type: String },
	notes: { type: String }
};

module.exports = kayakerSchema;