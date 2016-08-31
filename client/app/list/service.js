function DataExcursionService( $http ) {

	function getDataExcursion() {
		return $http.get('/api/excursions'); // returns a promise
	}
	// return Excursion Service
	return {
		getDataExcursion: getDataExcursion
	};
}

DataExcursionService.$inject = ['$http'];
module.exports = DataExcursionService;
