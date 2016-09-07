function KayakersListCtrl( $scope, $rootScope, DataKayakersService ) {

	console.log("KayakerListCtrl....")
	$scope.kayakers = [];

	$rootScope.bgId = 'backgroundSubpages';

	DataKayakersService.getAllKayakers()
		.then( function(result) {
			console.log(result);
			console.log("estem a KayakersListCtrl");
			$scope.kayakers = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

KayakersListCtrl.$inject = ['$scope', '$rootScope', 'DataKayakersService'];
module.exports = KayakersListCtrl;