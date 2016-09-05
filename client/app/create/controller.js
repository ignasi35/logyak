
function CreateExcursionCtrl ($scope, $location, DataExcursionService){
		$scope.formData = {};

	$scope.submit = function(formData){
		console.log(formData);

		DataExcursionService.createExcursion(formData)
			.then(function(resp) {
				var id = resp.headers('Location').split('/')[3];

				$location.path('/excursion/' + id);
			}, function(err){
				console.log('error', err)
			});
	}
}

CreateExcursionCtrl.$inject = ['$scope', '$location', 'DataExcursionService'];
module.exports = CreateExcursionCtrl;
