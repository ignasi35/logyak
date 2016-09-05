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

			.when('/listKayakers', {
				templateUrl: '/app/listKayakers/template.html',
				controller: 'KayakersListCtrl'
			})

			.when('/kayaker/:username', {
				templateUrl: '/app/listKayakers/template.html',
				controller: 'KayakerDetailsCtrl'
			})

			.otherwise({ redirectTo: '/' }); 
}

myRouteProvider.$inject = ['$routeProvider'];
module.exports = myRouteProvider;
