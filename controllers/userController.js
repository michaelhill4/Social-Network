const { User, Thought } = require('../models');

module.exports = {
    // Get all User
    getUser(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
}