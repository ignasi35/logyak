angular
	.module('logyakControllers',[])

		.controller('DataExcursionsController', function( $scope, DataExcursionService) {

			$scope.excursions = {};

			DataExcursionService.getDataExcursion()
				.then( function(result) {
					console.log(result);
					//promise complete
					$scope.excursions = result.data;
				})
				.catch( function(error) {
					console.log('error', error)
				});
		})

		// .controller("DetailOf1ExcursionController", function($scope, DataExcursionService) {

			
		// 		$scope.excursionToShow = {};

		// 		DataExcursionService.getDataExcursion()
		// 			.then( function(result) {

		// 				$scope.excursionToShow = result.data.selectedId;


		// 			$scope.id =  dataFromExcursion.id;
		// 			$scope.name = dataFromExcursion.name;
		// 			$scope.date = dataFromExcursion.date;
		// 			$scope.attendees = dataFromExcursion.attendees;
		// 			$scope.distance = dataFromExcursion.distance;
		// 			$scope.html = dataFromExcursion.html;
		// 			$scope.time = dataFromExcursion.time;
		// 			$scope.['sea conditions'] = dataFromExcursion.['sea conditions'];
		// 			$scope.notes = dataFromExcursion.notes;

		// 			//promise complete
		// 		})
		// 		.catch( function(error) {
		// 			console.log('error', error);
		// 		})

		// 	})



		.controller('FooterQuoteController', function( $scope, FooterQuoteService ) {
			$scope.quote = "";

			function randomQuote (arrayOfQuotes) {  // arrayOfQuotes is an array of Strings.
				var n = new Date().getTime();
				console.log(n);
				var divisor = arrayOfQuotes.length;
				return arrayOfQuotes[ n % divisor ];
			}

			FooterQuoteService.getFooterQuotes()
				.then( function(arrayOfQuotes) {
					console.log("in controller: " + arrayOfQuotes);
					$scope.quote = randomQuote(arrayOfQuotes).quote ;
					//promise complete
				})
				.catch( function(error) {
					console.log('error', error);
				})

			});



