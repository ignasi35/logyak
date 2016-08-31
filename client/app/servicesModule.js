var DataExcursionService = require ("./list/service")
var QuoteService = require("./quotes/service")

angular.module('logyakServices', [])
	.factory("DataExcursionService", DataExcursionService)
	.factory('QuoteService',QuoteService)

module.exports = "logyakServices";