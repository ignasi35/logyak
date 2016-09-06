var CreateExcursionCtrl  = require("./create/controller");
var ExcursionsListCtrl   = require("./list/controller");
var ExcursionDetailsCtrl = require("./details/controller");
var ExcursionEditCtrl    = require("./edit/controller");
var DeleteExcursionCtrl  = require("./delete/controller");


var CreateKayakerCtrl    = require("./createKayaker/controller");
var KayakersListCtrl     = require("./listKayakers/controller");
var KayakerDetailsCtrl   = require("./detailsKayaker/controller");
var KayakerEditCtrl      = require("./editKayaker/controller");
var DeleteKayakerCtrl    = require("./deleteKayaker/controller");

var QuoteController      = require ("./quotes/controller");


angular.module('logyakControllers',[])
	.controller("CreateExcursionCtrl",  CreateExcursionCtrl)
	.controller("ExcursionsListCtrl",   ExcursionsListCtrl)
	.controller("ExcursionDetailsCtrl", ExcursionDetailsCtrl)
	.controller("ExcursionEditCtrl",    ExcursionEditCtrl)
	.controller("DeleteExcursionCtrl",  DeleteExcursionCtrl)


	.controller("CreateKayakerCtrl",    CreateKayakerCtrl)
	.controller("KayakersListCtrl",     KayakersListCtrl)
	.controller("KayakerDetailsCtrl",   KayakerDetailsCtrl)
	.controller("KayakerEditCtrl",      KayakerEditCtrl)
	.controller("DeleteKayakerCtrl",    DeleteKayakerCtrl)

	.controller("QuoteController",      QuoteController)



module.exports = "logyakControllers";

