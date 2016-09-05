var kayakerSchema = {
	id: { type: String, required: true },
	name: { type: String, required: true, trim: true },
	surname: { type: String, required: true, trim: true },
	kayakmaterial: { type: String, required: true, trim: true },
	notes: { type: String }
};

module.exports = kayakerSchema;