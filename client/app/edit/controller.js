function ExcursionEditCtrl( $scope,  $routeParams, $location, DataExcursionService) {

/// inicialitzacio
	var excursionId = $routeParams.id;
	$scope.excursion = {};

	DataExcursionService.getOneExcursion(excursionId)
		.then( function(result) {
			$scope.excursion = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});

///  altres metodes

	$scope.update = function(excursion) {
		DataExcursionService.updateExcursion(excursion)
			.then( function(result) {
				$location.path('/excursion/' + excursion.id);
			})
			.catch( function(error) {
				console.log('error', error)
			});

	};
		
}

ExcursionEditCtrl.$inject = ['$scope', '$routeParams', '$location','DataExcursionService'];
module.exports = ExcursionEditCtrl;
