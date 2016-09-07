function ExcursionsListCtrl( $scope, $rootScope, DataExcursionService ) {

	console.log("ExcursionsListCtrl....")
	$scope.excursions = {};

	$rootScope.bgId = 'backgroundSubpages';

	DataExcursionService.getAllExcursions()
		.then( function(result) {
			$scope.excursions = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

ExcursionsListCtrl.$inject = ['$scope', '$rootScope', 'DataExcursionService'];
module.exports = ExcursionsListCtrl;