function ExcursionsListCtrl( $scope, DataExcursionService ) {

	console.log("ExcursionsListCtrl....")
	$scope.excursions = {};

	DataExcursionService.getAllExcursions()
		.then( function(result) {
			$scope.excursions = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

ExcursionsListCtrl.$inject = ['$scope', 'DataExcursionService'];
module.exports = ExcursionsListCtrl;