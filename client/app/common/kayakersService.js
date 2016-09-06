function DataKayakersService( $http ) {

	function getAllKayakers() {
		return $http.get('/api/kayakers'); 
	}

	function getOneKayaker(kayakerId) {
		return $http.get('/api/kayakers/' + kayakerId ); 
	}

	function updateKayaker(kayaker) {
		return $http.put('/api/kayakers/'+ kayaker.username, kayaker); 
	}


	return {
		getAllKayakers: getAllKayakers,
		getOneKayaker: getOneKayaker,
		updateKayaker: updateKayaker
	};
}

DataKayakersService.$inject = ['$http'];
module.exports = DataKayakersService;

