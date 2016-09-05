function DataExcursionService( $http ) {

	function createExcursion(formData) {
		return $http.post('/api/excursions', formData);
	}

	function getAllExcursions() {
		return $http.get('/api/excursions'); 
	}

	function getOneExcursion(id) {
		return $http.get('/api/excursions/' + id ); 
	}

	function updateExcursion(excursion) {
		return $http.put('/api/excursions/'+ excursion.id, excursion); 
	}

	return {
		createExcursion: createExcursion,
		getAllExcursions: getAllExcursions,
		getOneExcursion: getOneExcursion,
		updateExcursion: updateExcursion
	};
}

DataExcursionService.$inject = ['$http'];
module.exports = DataExcursionService;
