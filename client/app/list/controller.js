function ExcursionsListCtrl( $scope, DataExcursionService ) {

	console.log("ExcursionsListCtrl....")
	$scope.excursions = {};

	DataExcursionService.getDataExcursion()
		.then( function(result) {
			console.log(result);
			//promise complete
			$scope.excursions = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

ExcursionsListCtrl.$inject = ['$scope', 'DataExcursionService'];
module.exports = ExcursionsListCtrl;