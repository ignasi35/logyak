
function CreateKayakerCtrl ($scope, $location, DataKayakersService){
		$scope.kayakerFormData = {};

	$scope.submit = function(kayakerFormData){
		console.log(kayakerFormData);

		DataKayakersService.createKayaker(kayakerFormData)
			.then(function(resp) {
				var id = resp.headers('Location').split('/')[3]; //returns header of put request

				$location.path('/kayaker/' + id);
			}, function(err){
				console.log('error', err)
			});
	}
}

CreateKayakerCtrl.$inject = ['$scope', '$location', 'DataKayakersService'];
module.exports = CreateKayakerCtrl;
