function KayakerDetailsCtrl( $scope,  $routeParams, DataKayakersService) {

	var kayakerId = $routeParams.kayakerId;
	console.log(kayakerId);
	$scope.kayaker = {};

	DataKayakersService.getOneKayaker(kayakerId)
		.then( function(result) {
			console.log(result.data)
			$scope.kayaker = result.data;

		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}
KayakerDetailsCtrl.$inject = ['$scope', '$routeParams', 'DataKayakersService'];
module.exports = KayakerDetailsCtrl;
