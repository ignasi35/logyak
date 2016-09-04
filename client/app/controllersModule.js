var ExcursionDetailsCtrl = require("./details/controller");
var DeleteExcursionCtrl = require("./delete/controller");
var ExcursionEditCtrl = require("./edit/controller");
var ExcursionsListCtrl = require("./list/controller");
var QuoteController = require ("./quotes/controller");


angular.module('logyakControllers',[])
	.controller("ExcursionDetailsCtrl", ExcursionDetailsCtrl)
	.controller("DeleteExcursionCtrl", DeleteExcursionCtrl)
	.controller("ExcursionEditCtrl", ExcursionEditCtrl)
	.controller("ExcursionsListCtrl", ExcursionsListCtrl)
	.controller("QuoteController", QuoteController)


module.exports = "logyakControllers";