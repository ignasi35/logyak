function myRouteProvider($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/app/list/template.html',
				controller: 'ExcursionsListCtrl'
			})

			.when('/excursion/:id', {
				templateUrl: '/app/details/template.html',
				controller: 'ExcursionDetailsCtrl'
			})

			.when('/create', {
				templateUrl: '/app/create/template.html'
			})

			.when('/edit/:id', {
				templateUrl: '/app/edit/template.html',
				controller: 'ExcursionEditCtrl'
			})

			.otherwise({ redirectTo: '/' }); 
}

myRouteProvider.$inject = ['$routeProvider'];
module.exports = myRouteProvider;
