angular.module('logyakServices')
	.factory('QuoteService',function( $http ) {
		
		function getFooterQuotes() {
			return $http
				.get('../json/quotes.json')
				.then( function(httpQuotes){
					return httpQuotes.data;
				}); // returns a promise
		}

		// return Quotes Service
		return {
			getFooterQuotes: getFooterQuotes
		};

	});
