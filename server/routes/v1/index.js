const express = require('express');
const authRoutes = require('./auth.route');
const blogRoutes = require('./blog.route');
const userRoutes = require('./user.route');
var jwt = require('express-jwt');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);

module.exports = router;