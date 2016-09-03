var express = require('express');

var getAllExcursions = require('./handlers/getAllExcursions');
var createExcursion = require('./handlers/createExcursion');
var signS3 = require('./handlers/signS3');

var router = express.Router();

router.get('/api/excursions', getAllExcursions);
router.post ('/api/excursions', createExcursion);

router.get('/sign-s3', signS3);

module.exports = router;


