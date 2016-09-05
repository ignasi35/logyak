var DataExcursionService   = require ("./list/service");
var DeleteExcursionService = require("./delete/service");
var DataKayakersService    = require ("./kayakersService");

var QuoteService           = require("./quotes/service");

angular.module('logyakServices', [])
	.factory("DataExcursionService", DataExcursionService)
	.factory("DeleteExcursionService", DeleteExcursionService)
	.factory("DataKayakersService", DataKayakersService)
	
	.factory('QuoteService',QuoteService)

module.exports = "logyakServices";