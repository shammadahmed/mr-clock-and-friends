const express = require('express');
const router = express.Router();
const demiurges = require('../models/demiurges').demiurges;
const Demiurge = require('../models/demiurges').Demiurge;

function findDemiurge(name) {
	return demiurges.find(demiurge => name === demiurge.name);
}

router.get('/:name', (req, res, next) => {
	res.render('demiurge', {demiurge: findDemiurge(req.params.name)});
	console.log(req.params.name);
	console.log(findDemiurge(req.params.name));	
});

module.exports = router;
