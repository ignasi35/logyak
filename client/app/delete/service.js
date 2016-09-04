function DeleteExcursionService( $http ) {
	function deleteDataExcursion(id) {
		return $http.delete('/api/excursions/'+id); // returns a promise
	}
	return {
		deleteDataExcursion : deleteDataExcursion
	};
}

DeleteExcursionService.$inject = ['$http'];
module.exports = DeleteExcursionService;
