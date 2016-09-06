function CreateExcursionService( $http ) {
	function createExcursion(id) {
		return $http.post('/api/excursions/'+id); // returns a promise
	}
	return {
		createExcursion : createExcursion
	};
}

CreateExcursionService.$inject = ['$http'];
module.exports = CreateExcursionService;
