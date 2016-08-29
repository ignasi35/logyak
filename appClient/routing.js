angular.module ("logyakConfig",[])

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/list/template.html',
				controller: 'ExcursionsListCtrl'
			})

			.when('/excursion/:id', {
				templateUrl: '/details/template.html',
				controller: 'ExcursionDetailsCtrl'
			})

			.when('/createExcursion', {
				templateUrl: '/create/template.html'
			})

			.otherwise({ redirectTo: '/' }); 
	})