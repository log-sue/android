const express = require('express');
const router = express.Router();

// User information CRUD
const user = require('./user.js');
router.use('/user', user);

module.exports = router;