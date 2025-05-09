const express = require('express');
const router = express.Router();
const { getActivities } = require('../controllers/activity');

router.get('/', getActivities);

module.exports = router;