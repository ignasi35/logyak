function DataKayakersService( $http ) {

	function getAllKayakers() {
		return $http.get('/api/kayakers'); 
	}

	// function getOneExcursion(id) {
	// 	return $http.get('/api/excursions/' + id ); 
	// }

	// function updateExcursion(excursion) {
	// 	return $http.put('/api/excursions/'+ excursion.id, excursion); 
	// }


	return {
		getAllKayakers: getAllKayakers
		//getOneExcursion: getOneExcursion,
		//updateExcursion: updateExcursion
	};
}

DataKayakersService.$inject = ['$http'];
module.exports = DataKayakersService;
