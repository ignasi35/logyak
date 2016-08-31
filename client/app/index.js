var angular = require('angular');
var angularRoute = require('angular-route');
var ngRoute = require ('ngRoute');
var logyakControllers = require("./controllersModule");
var logyakServices = require ('./servicesModule');
var logyakConfig = require('./routingModule');


angular.module("myLogyakApp",[ 
	angularRoute,
	ngRoute, 
	logyakControllers,
	logyakServices,
	logyakConfig
]);