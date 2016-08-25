angular.module('logyakControllers')
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



