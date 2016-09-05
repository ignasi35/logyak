var mongoose = require('mongoose');

var kayakerDef = require('./schemas/kayaker');

var KayakerSchema = new mongoose.Schema(kayakerDef);

var KayakerModel = mongoose.model("kayaker", KayakerSchema);

module.exports = KayakerModel;


