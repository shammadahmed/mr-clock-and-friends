var express = require('express');
var router = express.Router();
const demiurges = require('../models/demiurges').demiurges;

router.get('/', function(req, res, next) {
  res.render('index', {demiurges});
});

module.exports = router;
