var express = require('express');

// CRUD Excursion
var getAllExcursions = require('./handlers/getAllExcursions');
var getOneExcursion  = require('./handlers/getOneExcursion');
var createExcursion  = require('./handlers/createExcursion');
var updateExcursion  = require('./handlers/updateExcursion');
var deleteExcursion  = require('./handlers/deleteExcursion');

// Pictures of an excursion
var attachPicsToExcursion = require('./handlers/attachPicsToExcursion');
var signS3 = require('./handlers/signS3');



var router = express.Router();



router.get   ('/api/excursions',     getAllExcursions);
router.post  ('/api/excursions',     createExcursion);
router.get   ('/api/excursions/:id', getOneExcursion);
router.put   ('/api/excursions/:id', updateExcursion);
router.delete('/api/excursions/:id', deleteExcursion);


router.post('/api/excursions/:id/pictures', attachPicsToExcursion);
router.get('/sign-s3', signS3);


module.exports = router;


