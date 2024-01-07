"user strict";

const loadAuth = (req, res) => {
    res.render('auth', { user: req.user });
}

module.exports = {
    loadAuth
}