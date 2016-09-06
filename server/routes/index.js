var express = require('express');

// CRUD Excursion
var createExcursion  = require('./handlers/createExcursion');
var getAllExcursions = require('./handlers/getAllExcursions');
var getOneExcursion  = require('./handlers/getOneExcursion');
var updateExcursion  = require('./handlers/updateExcursion');
var deleteExcursion  = require('./handlers/deleteExcursion');

// Pictures of an excursion
var attachPicsToExcursion = require('./handlers/attachPicsToExcursion');
var signS3 = require('./handlers/signS3');

//CRUD Kayakers
var getAllKayakers = require('./handlers/getAllKayakers');
var getOneKayaker  = require('./handlers/getOneKayaker');
var createKayaker  = require('./handlers/createKayaker');
var updateKayaker  = require('./handlers/updateKayaker');
var deleteKayaker  = require('./handlers/deleteKayaker');


var router = express.Router();

router.post  ('/api/excursions',     createExcursion);
router.get   ('/api/excursions',     getAllExcursions);
router.get   ('/api/excursions/:id', getOneExcursion);
router.put   ('/api/excursions/:id', updateExcursion);
router.delete('/api/excursions/:id', deleteExcursion);

router.post  ('/api/kayakers',           createKayaker);
router.get   ('/api/kayakers',           getAllKayakers);
router.get   ('/api/kayakers/:username', getOneKayaker);
router.put   ('/api/kayakers/:username', updateKayaker);
router.delete('/api/kayakers/:username', deleteKayaker);



router.post('/api/excursions/:id/pictures', attachPicsToExcursion);
router.get('/sign-s3', signS3);


module.exports = router;


