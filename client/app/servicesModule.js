var DataExcursionService   = require ("./common/excursionsServices");
var DataKayakersService    = require ("./common/kayakersService");

var QuoteService           = require("./quotes/service");

angular.module('logyakServices', [])
	.factory("DataExcursionService", DataExcursionService)
	.factory("DataKayakersService", DataKayakersService)

	.factory('QuoteService',QuoteService)

module.exports = "logyakServices";