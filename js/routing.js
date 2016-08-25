angular.module ("logyakConfig",[])

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/excursionsList.html',
				controller: 'DataExcursionsController',
				controllerAs: 'excursionsList'
			})

			.when('/excursionDetailForm', {
				templateUrl: 'templates/excursionDetailForm.html',
				controller: 'excursionDetailForm',
				controllerAs: 'excursionDetailForm'
			})

			.when('/excursionDetail', {
				templateUrl: 'templates/excursionDetail.html',
				controller: 'excursionDetail',
				controllerAs: 'excursionDetail'
			})

			.otherwise({ redirectTo: '/' }); 
	})