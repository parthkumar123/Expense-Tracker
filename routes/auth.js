"use strict";
// Purpose: Handle all routes related to login.
const express = require("express");
const router = express.Router();
const passport = require('passport');

const authController = require("../controllers/auth");

router.get('/', authController.loadAuth);

// Auth 
router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

// Auth Callback 
router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    })
);

module.exports = router;