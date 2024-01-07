"use strict";
// Purpose: Handle all routes related to login.
const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboard");

router.route("/")
    .get(dashboardController.getGroupList);

module.exports = router;