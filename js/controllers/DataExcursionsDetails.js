angular.module('logyakControllers')
	.controller('DataExcursionsController', function( $scope, DataExcursionService) {

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
			
	})