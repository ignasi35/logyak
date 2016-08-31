
var express = require('express');
var models = require('./models');
var path = require( 'path' );
var bodyParser = require('body-parser');

var app = express();

// for HTML rendering
app.use( express.static( path.join( __dirname, '../client' )) );

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// support json encoded bodies
app.use( bodyParser.json() ); // support json encoded bodies


module.exports = app;



