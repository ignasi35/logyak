function DataKayakersService( $http ) {

	function getAllKayakers() {
		return $http.get('/api/kayakers'); 
	}

	function getOneKayaker(id) {
		return $http.get('/api/kayakers/' + username ); 
	}

	// function updateExcursion(excursion) {
	// 	return $http.put('/api/excursions/'+ excursion.id, excursion); 
	// }


	return {
		getAllKayakers: getAllKayakers
		getOneKayaker: getOneKayaker,
		//updateExcursion: updateExcursion
	};
}

DataKayakersService.$inject = ['$http'];
module.exports = DataKayakersService;
