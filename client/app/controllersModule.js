var ExcursionDetailsCtrl = require("./details/controller");
var ExcursionsListCtrl = require("./list/controller");
var QuoteController = require ("./quotes/controller");

angular.module('logyakControllers',[])
	.controller("ExcursionDetailsCtrl", ExcursionDetailsCtrl)
	.controller("ExcursionsListCtrl", ExcursionsListCtrl)
	.controller("QuoteController", QuoteController)


module.exports = "logyakControllers";