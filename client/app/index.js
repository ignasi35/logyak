var angular = require('angular');
var angularRoute = require('angular-route');
var logyakControllers = require("./controllersModule");
var logyakServices = require ('./servicesModule');
var logyakConfig = require('./routingModule');


angular.module("myLogyakApp",[ 
	angularRoute,
	logyakControllers,
	logyakServices,
	logyakConfig
]);