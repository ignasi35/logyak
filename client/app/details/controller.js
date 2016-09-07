function ExcursionDetailsCtrl( $scope,  $rootScope, $routeParams, DataExcursionService) {

	var excursionId = $routeParams.id;
	$scope.excursion = {};
	$rootScope.bgId = 'backgroundSubpages';

	DataExcursionService.getOneExcursion(excursionId)
		.then( function(result) {
			console.log(result.data)
			$scope.excursion = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

ExcursionDetailsCtrl.$inject = ['$scope', '$rootScope', '$routeParams', 'DataExcursionService'];
module.exports = ExcursionDetailsCtrl;
