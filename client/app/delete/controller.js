function DeleteExcursionCtrl($scope, $routeParams, $rootScope, $location, DataExcursionService) {
	$rootScope.bgId = 'backgroundSubpages';

	$scope.deleteExcursion = function() {
		var excursionId = $routeParams.id;
		console.log(excursionId);

		DataExcursionService.deleteDataExcursion(excursionId)
			.then( function(result) {
				$location.path('/listExcursions');
			})
			.catch( function(error) {
				console.log(error);
			});
	}

}

DeleteExcursionCtrl.$inject = ['$scope', '$routeParams', '$rootScope', '$location', 'DataExcursionService'];
module.exports = DeleteExcursionCtrl;
