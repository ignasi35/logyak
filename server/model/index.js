var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var createExcursion = require('./schemas');

var ExcursionSchema = new createExcursion;
// will use the collection -> excursion
var ExcursionModel = mongoose.model("excursion", ExcursionSchema);


process.getModel = function (name) {
    return models[name];
}