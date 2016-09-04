var ExcursionDetailsCtrl = require("./details/controller");
var DeleteExcursionCtrl = require("./details/deleteController");
var ExcursionsListCtrl = require("./list/controller");
var QuoteController = require ("./quotes/controller");


angular.module('logyakControllers',[])
	.controller("ExcursionDetailsCtrl", ExcursionDetailsCtrl)
	.controller("DeleteExcursionCtrl", DeleteExcursionCtrl)
	.controller("ExcursionsListCtrl", ExcursionsListCtrl)
	.controller("QuoteController", QuoteController)


module.exports = "logyakControllers";