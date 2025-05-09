const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/auth');
const { validate, registerSchema, loginSchema } = require('../middleware/validate');

router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);

module.exports = router;