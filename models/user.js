"use strict";
const mongoose = require("mongoose");

// Create a schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "User Name is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, { timestamps: true }, { collection: "users" });

// Create a model
module.exports = mongoose.model("users", userSchema);