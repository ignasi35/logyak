angular
	.module('logyakControllers',[])

		.controller('DataExcursionsController', function( $scope, DataExcursionService) {

			$scope.excursions = {};

			DataExcursionService.getDataExcursion()
				.then( function(result) {
					console.log(result);
					//promise complete
					$scope.excursions = result;
				})
				.catch( function(error) {
					console.log('error', error)
				});
		});

		.controller('FooterQuoteController', function( $scope ) {
			$scope.randomQuote = function() {
    console.log (new Date().getTime() % 2 +1);
};

