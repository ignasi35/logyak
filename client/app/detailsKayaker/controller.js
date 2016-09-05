function KayakerDetailsCtrl( $scope,  $routeParams, DataKayakerService) {

	var kayakerId = $routeParams.username;
	$scope.kayaker = {};

	DataExcursionService.getOneKayaker(kayakerId)
		.then( function(result) {
			console.log(result.data)
			$scope.kayaker = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

KayakerDetailsCtrl.$inject = ['$scope', '$routeParams', 'DataKayakerService'];
module.exports = KayakerDetailsCtrl;
