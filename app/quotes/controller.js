angular.module('logyakControllers')
	.controller('QuoteController', function( $scope, QuoteService ) {
		
		$scope.quote = "";

		function randomQuote (arrayOfQuotes) {  // arrayOfQuotes is an array of Strings.
			var n = new Date().getTime();
			console.log(n);
			var divisor = arrayOfQuotes.length;
			return arrayOfQuotes[ n % divisor ];
		}

		QuoteService.getFooterQuotes()
			.then( function(arrayOfQuotes) {
				console.log("in controller: " + arrayOfQuotes);
				$scope.quote = randomQuote(arrayOfQuotes).quote ;
				//promise complete
			})
			.catch( function(error) {
				console.log('error', error);
			})

	});



