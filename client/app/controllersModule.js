var ExcursionDetailsCtrl = require("./details/controller");
var ExcursionsListCtrl = require("./list/controller");

angular.module('logyakControllers',[])
	.controller("ExcursionDetailsCtrl", ExcursionDetailsCtrl)
	.controller("ExcursionsListCtrl", ExcursionsListCtrl)


module.exports = "logyakControllers";