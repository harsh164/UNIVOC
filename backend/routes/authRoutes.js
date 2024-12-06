const express = require('express');
const { signup, login } = require('../controllers/authController');
//const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
