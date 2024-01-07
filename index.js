"use strict";
// Dynamic port binding.
const path = require("path");
require("dotenv").config({
    path: path.join(__dirname, `/env/${process.env.NODE_ENV}.env`)
});

// Description: This file is the entry point of the application.
const express = require("express");
const app = express();
const passport = require('passport');

// Configure session
const session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}));

app.use(passport.initialize());
app.use(passport.session());
require('./passport');

// configure ejs engine
app.set('view engine', 'ejs');

// Body parser middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Connect to MongoDB
const connectMongoDB = require('./connection');
connectMongoDB(process.env.MONGO_URI);

// Routes
const authRoute = require("./routes/auth");
const dashboardRoute = require("./routes/dashboard");

// Add routes
app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);

// Port configuration
const port = process.env.PORT || 3000;
// Start server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
});