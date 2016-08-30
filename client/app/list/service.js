angular.module('logyakServices')
	.factory('DataExcursionService',function( $http ) {

		function getDataExcursion() {
			return $http.get('/api/excursions'); // returns a promise
		}
		// return Excursion Service
		return {
			getDataExcursion: getDataExcursion
		};
		
	});
