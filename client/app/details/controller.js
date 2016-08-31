function ExcursionDetailsCtrl( $scope,  $routeParams, DataExcursionService) {

	var excursionId = $routeParams.id;
	$scope.excursion = {};

	DataExcursionService.getDataExcursion()
		.then( function(result) {

			// logic to filter only the excursion w/ 
			// the current ID

			function findExcursion(dataResult) { 
					return dataResult.id.toString() === excursionId;
			}

			// we assing this data to -> $scope.excursion

			$scope.excursion = result.data.find(findExcursion);
			console.log($scope.excursion);
		})

		.catch( function(error) {
			console.log('error', error)
		});
		
}

ExcursionDetailsCtrl.$inject = ['$scope', '$routeParams', 'DataExcursionService'];
module.exports = ExcursionDetailsCtrl;
