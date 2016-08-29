angular.module('logyakServices')
	.factory('DataExcursionService',function( $http ) {

		function getDataExcursion() {
			return $http.get('../json/dataExcursions.json'); // returns a promise
		}
		// return Excursion Service
		return {
			getDataExcursion: getDataExcursion
		};
		
	});
