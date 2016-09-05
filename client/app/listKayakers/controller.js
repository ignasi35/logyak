function KayakersListCtrl( $scope, DataKayakersService ) {

	console.log("KayakerListCtrl....")
	$scope.kayakers = [];

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

KayakersListCtrl.$inject = ['$scope', 'DataKayakersService'];
module.exports = KayakersListCtrl;