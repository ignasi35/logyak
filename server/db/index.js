// Bring Mongoose into the app 
var mongoose = require( 'mongoose' ); 

// Build the connection string 
var dbURI = process.env.DB_URI; 

// Create the database connection 
mongoose.connect(dbURI); 

var db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
db.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
db.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
db.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  db.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

// Exports module 
module.exports = db;
