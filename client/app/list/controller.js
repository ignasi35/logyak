function ExcursionsListCtrl( $scope, $rootScope, DataExcursionService ) {

	$scope.excursions = {};

	$rootScope.bgId = 'backgroundSubpages';

	DataExcursionService.getAllExcursions()
		.then( function(result) {
			$scope.excursions = result.data;
			$scope.prettyPrint = function(attendees){
				return attendees.map(
							function(attendee){
								return attendee.name + " " + attendee.surname ;
							}
						).join(", ")
			};

			console.log($scope.excursions);
		})
		.catch( function(error) {
			console.log('error', error)
		});
		
}

ExcursionsListCtrl.$inject = ['$scope', '$rootScope', 'DataExcursionService'];
module.exports = ExcursionsListCtrl;