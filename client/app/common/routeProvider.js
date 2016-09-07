function myRouteProvider($routeProvider) {
		$routeProvider
			.when('/listExcursions', {
				templateUrl: '/app/list/template.html',
				controller: 'ExcursionsListCtrl'
			})

			.when('/home', {
				templateUrl: '/app/home/template.html',
				controller: 'BackgroundHomeCtrl'
			})

			.when('/homeUser', {
				templateUrl: '/app/homeUser/template.html',
				controller: 'BackgroundHomeUserCtrl'
			})

			.when('/excursion/:id', {
				templateUrl: '/app/details/template.html',
				controller: 'ExcursionDetailsCtrl'
				// controller: 'AttendeesController'
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

			.when('/kayaker/:username', {
				templateUrl: '/app/detailsKayaker/template.html',
				controller: 'KayakerDetailsCtrl'
			})

			.when('/createKayaker', {
				templateUrl: '/app/createKayaker/template.html',
				controller: 'CreateKayakerCtrl'
			})
			
			.when('/editKayaker/:username', {
				templateUrl: '/app/editKayaker/template.html',
				controller: 'KayakerEditCtrl'
			})

			.otherwise({ redirectTo: '/homeUser' }); 
}

myRouteProvider.$inject = ['$routeProvider'];
module.exports = myRouteProvider;
