angular
	.module('logyakServices')

		.factory('FooterQuoteService',function( $http ) {
			function getFooterQuotes() {
				return $http
					.get('/json/footerQuotes.json')
					.then( function(httpQuotes){
						return httpQuotes.data;
					}); // returns a promise
			}

			// return Quotes Service
			return {
				getFooterQuotes: getFooterQuotes
			};

		});
