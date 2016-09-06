function DataKayakersService( $http ) {

	function createKayaker(kayakerFormData) {
		return $http.post('/api/kayakers', kayakerFormData);
	}

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
		createKayaker:  createKayaker,
		getAllKayakers: getAllKayakers,
		getOneKayaker:  getOneKayaker,
		updateKayaker:  updateKayaker
	};
}

DataKayakersService.$inject = ['$http'];
module.exports = DataKayakersService;

