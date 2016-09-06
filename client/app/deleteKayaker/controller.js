function DeleteKayakerCtrl($scope, $routeParams, $location, DataKayakersService) {

	$scope.deleteKayaker = function() {
		var kayakerId = $routeParams.username;
		console.log(kayakerId);

		DataKayakersService.deleteKayaker(kayakerId)
			.then( function(result) {
				$location.path('/listKayakers');
			})
			.catch( function(error) {
				console.log(error);
			});
	}
}

DeleteKayakerCtrl.$inject = ['$scope', '$routeParams', '$location', 'DataKayakersService'];
module.exports = DeleteKayakerCtrl;
