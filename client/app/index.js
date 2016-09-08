var angular = require('angular');
var angularRoute = require('angular-route');
var angularChecklist = require('checklist-model')
var logyakControllers = require("./controllersModule");
var logyakServices = require ('./servicesModule');
var logyakConfig = require('./routingModule');


angular.module("myLogyakApp",[ 
	angularRoute,
	angularChecklist,
	logyakControllers,
	logyakServices,
	logyakConfig
]);

