angular.module ("logyakConfig",[])

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/excursionsList.html',
				controller: 'ExcursionsListCtrl'
			})

			.when('/excursion/:id', {
				templateUrl: 'templates/excursionDetails.html',
				controller: 'ExcursionDetailsCtrl'
			})

			.when('/editExcursion', {
				templateUrl: 'templates/excursionDetailForm.html'
			})

			.otherwise({ redirectTo: '/' }); 
	})