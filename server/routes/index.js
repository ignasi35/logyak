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

//CRUD Kayakers
var getAllKayakers = require('./handlers/getAllKayakers');
var getOneKayaker  = require('./handlers/getOneKayaker');


var router = express.Router();


router.get   ('/api/excursions',     getAllExcursions);
router.post  ('/api/excursions',     createExcursion);
router.get   ('/api/excursions/:id', getOneExcursion);
router.put   ('/api/excursions/:id', updateExcursion);
router.delete('/api/excursions/:id', deleteExcursion);

router.get   ('/api/kayakers',           getAllKayakers);
router.get   ('/api/kayakers/:username', getAllKayakers);


router.post('/api/excursions/:id/pictures', attachPicsToExcursion);
router.get('/sign-s3', signS3);


module.exports = router;


