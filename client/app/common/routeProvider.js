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
				templateUrl: '/app/create/template.html',
				controller: 'CreateExcursionCtrl'
			})

			.when('/edit/:id', {
				templateUrl: '/app/edit/template.html',
				controller: 'ExcursionEditCtrl'
			})

			.when('/listKayakers', {
				templateUrl: '/app/listKayakers/template.html',
				controller: 'KayakersListCtrl'
			})

			.when('/createKayaker', {
				templateUrl: '/app/createKayaker/template.html',
				controller: 'CreateKayakerCtrl'
			})

			.when('/kayaker/:kayakerId', {
				templateUrl: '/app/detailsKayaker/template.html',
				controller: 'KayakerDetailsCtrl'
			})

			.when('/editKayaker/:username', {
				templateUrl: '/app/editKayaker/template.html',
				controller: 'KayakerEditCtrl'
			})

			.otherwise({ redirectTo: '/' }); 
}

myRouteProvider.$inject = ['$routeProvider'];
module.exports = myRouteProvider;
