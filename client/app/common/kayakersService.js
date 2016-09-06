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

	function deleteKayaker(kayakerId) {
		return $http.delete('/api/kayakers/' + kayakerId); // returns a promise
	}


	return {
		createKayaker:  createKayaker,
		getAllKayakers: getAllKayakers,
		getOneKayaker:  getOneKayaker,
		updateKayaker:  updateKayaker,
		deleteKayaker: deleteKayaker
	};
}

DataKayakersService.$inject = ['$http'];
module.exports = DataKayakersService;

