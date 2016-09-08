function ExcursionEditCtrl( $scope,  $routeParams, $rootScope, $location, DataExcursionService, DataKayakersService) {

/// inicialitzacio
	var excursionId = $routeParams.id;
	$scope.excursion = {};
	$rootScope.bgId = 'backgroundSubpages';

	DataExcursionService.getOneExcursion(excursionId)
		.then( function(result) {
			$scope.excursion = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});

	DataKayakersService.getAllKayakers()
		.then( function(result) {
			$scope.kayakers = result.data;
		})
		.catch( function(error) {
			console.log('error', error)
		});

///  altres metodes




	$scope.attended = function(kayaker, excursion){
		var arrayOfUsernameOfAttendees = excursion.attendees.map(function(att){return att.username;})
		return arrayOfUsernameOfAttendees.includes(kayaker.username) ;
	}

	$scope.prettyPrint = function(attendee){
		return attendee.name + " " + attendee.surname ;
	};

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


ExcursionEditCtrl.$inject = ['$scope', '$routeParams', '$rootScope', '$location','DataExcursionService', 'DataKayakersService'];
module.exports = ExcursionEditCtrl;
