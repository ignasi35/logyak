var app = require('./server/app');
var db = require('./server/db');

var dbURI= process.env.DB_URI  //|| "mongodb://admin:logyak2016!@ds019746.mlab.com:19746/logyak";
var PORT = process.env.PORT || 8080;

db.open(dbURI);

app.listen( PORT, function() {
	console.log('Now running on port 8080');
})


