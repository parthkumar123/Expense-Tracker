"use strict";
// Purpose: Handle all routes related to login.
const express = require("express");
const router = express.Router();

const {
    getUserList,
} = require("../controllers/user");

router.route("/")
    .get(getUserList);

module.exports = router;