function KayakerEditCtrl( $scope, $routeParams, $rootScope, $location, DataKayakersService) {

/// inicialitzacio
	var kayakerId = $routeParams.username;
	$scope.kayaker = {};
	$rootScope.bgId = 'backgroundSubpages';

	DataKayakersService.getOneKayaker(kayakerId)
		.then( function(result) {
			$scope.kayaker = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});

///  altres metodes

	$scope.update = function(kayaker) {
		DataKayakersService.updateKayaker(kayaker)
			.then( function(result) {
				$location.path('/kayaker/' + kayaker.username);
			})
			.catch( function(error) {
				console.log('error', error)
			});

	};
		
}

KayakerEditCtrl.$inject = ['$scope', '$routeParams', '$rootScope', '$location','DataKayakersService'];
module.exports = KayakerEditCtrl;
