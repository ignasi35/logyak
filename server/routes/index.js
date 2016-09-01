var express = require('express');

var getAllExcursions = require('./handlers/getAllExcursions');
var createExcursion = require('./handlers/createExcursion');

var router = express.Router();

router.get('/api/excursions', getAllExcursions);
router.post ('/api/excursions', createExcursion);

module.exports = router;


