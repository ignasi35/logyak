var DataExcursionService = require ("./list/service");
var DeleteExcursionService = require("./delete/service")
var QuoteService = require("./quotes/service")

angular.module('logyakServices', [])
	.factory("DataExcursionService", DataExcursionService)
	.factory("DeleteExcursionService", DeleteExcursionService)
	.factory('QuoteService',QuoteService)

module.exports = "logyakServices";