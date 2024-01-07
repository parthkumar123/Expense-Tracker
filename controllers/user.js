"user strict";

// Handle user login
async function getUserList(req, res) {
    try {
        res.status(200).json({
            message: 'User details fetched successfully'
        });
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getUserList,
}