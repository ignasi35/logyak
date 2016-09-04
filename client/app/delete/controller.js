function DeleteExcursionCtrl($scope, $routeParams, $location, DeleteExcursionService) {

	$scope.deleteExcursion = function() {
		var excursionId = $routeParams.id;
		console.log(excursionId);

		DeleteExcursionService.deleteDataExcursion(excursionId)
			.then( function(result) {
				$location.path('/');
			})
			.catch( function(error) {
				console.log(error);
			});
	}

}

DeleteExcursionCtrl.$inject = ['$scope', '$routeParams', '$location', 'DeleteExcursionService'];
module.exports = DeleteExcursionCtrl;
