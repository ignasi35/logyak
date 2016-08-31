function QuoteService ( $http ) {

	function getFooterQuotes() {
		return $http
			.get('/data/quotes.json')
			.then( function(httpQuotes){
				return httpQuotes.data;
			}); // returns a promise
	}

	// return Quotes Service
	return {
		getFooterQuotes: getFooterQuotes
	};

}

QuoteService.$inject = ['$http'];
module.exports = QuoteService;
