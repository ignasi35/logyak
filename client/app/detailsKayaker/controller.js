function KayakerDetailsCtrl( $scope, $rootScope, $routeParams, DataKayakersService) {

	var kayakerId = $routeParams.username;
	$scope.kayaker = {};
	$rootScope.bgId = 'backgroundSubpages';

	DataKayakersService.getOneKayaker(kayakerId)
		.then( function(result) {
			console.log(result.data)
			$scope.kayaker = result.data;

		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}
KayakerDetailsCtrl.$inject = ['$scope', '$rootScope','$routeParams', 'DataKayakersService'];
module.exports = KayakerDetailsCtrl;
