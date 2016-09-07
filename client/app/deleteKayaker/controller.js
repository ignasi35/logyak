function DeleteKayakerCtrl($scope, $routeParams, $rootScope, $location, DataKayakersService) {
	$rootScope.bgId = 'backgroundSubpages';

	$scope.deleteKayaker = function() {
		console.log('routeParams', $routeParams)
		var kayakerId = $routeParams.username;
		console.log(kayakerId);

		DataKayakersService.deleteKayaker(kayakerId)
			.then( function(result) {
				$location.path('/listKayakers');
			})
			.catch( function(error) {
				console.log(error);
			});
	}
}

DeleteKayakerCtrl.$inject = ['$scope', '$routeParams', '$rootScope', '$location', 'DataKayakersService'];
module.exports = DeleteKayakerCtrl;
