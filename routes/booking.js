const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/booking');
const auth = require('../middleware/auth');
const { validate, bookingSchema } = require('../middleware/validate');

router.post('/', auth, validate(bookingSchema), bookActivity);
router.get('/my', auth, getMyBookings);

module.exports = router;