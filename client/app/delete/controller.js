function DeleteExcursionCtrl($scope, $routeParams, $location, DataExcursionService) {

	$scope.deleteExcursion = function() {
		var excursionId = $routeParams.id;
		console.log(excursionId);

		DataExcursionService.deleteDataExcursion(excursionId)
			.then( function(result) {
				$location.path('/');
			})
			.catch( function(error) {
				console.log(error);
			});
	}

}

DeleteExcursionCtrl.$inject = ['$scope', '$routeParams', '$location', 'DataExcursionService'];
module.exports = DeleteExcursionCtrl;
