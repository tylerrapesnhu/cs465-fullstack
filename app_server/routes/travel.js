var express = require('express');
var router = express.Router();
var contoller = require('../controllers/travel');

/* GET travel page. */
router.get('/', contoller.travel);

module.exports = router;
