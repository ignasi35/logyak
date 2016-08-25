angular.module ("logyakConfig",[])

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/excursionsList.html',
				controller: 'ExcursionsListCtrl'
			})

			// .when('/excursionDetailForm', {
			// 	templateUrl: 'templates/excursionDetailForm.html',
			// 	controller: 'excursionDetailForm'
			// })

			.when('/excursion/:id', {
				templateUrl: 'templates/excursionDetails.html',
				controller: 'ExcursionDetailsCtrl'
			})

			.otherwise({ redirectTo: '/' }); 
	})