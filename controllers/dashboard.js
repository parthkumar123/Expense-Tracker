"user strict";
const User = require("../models/user");

// Handle user login
async function getGroupList(req, res) {
    try {
        const userList = await User.find();

        res.status(200).json({
            status: true,
            data: req.user
        });
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getGroupList,
}