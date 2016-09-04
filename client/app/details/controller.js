function ExcursionDetailsCtrl( $scope,  $routeParams, DataExcursionService) {

	var excursionId = $routeParams.id;
	$scope.excursion = {};

	DataExcursionService.getOneExcursion(excursionId)
		.then( function(result) {
			console.log(result.data)
			$scope.excursion = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

ExcursionDetailsCtrl.$inject = ['$scope', '$routeParams', 'DataExcursionService'];
module.exports = ExcursionDetailsCtrl;
