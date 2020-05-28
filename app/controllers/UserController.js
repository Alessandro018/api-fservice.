const { User } = require('../models');

exports.store = (req, res) => {
    if (!req.body.name || !req.body.password || !req.body.email) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the User."
        });
    });
};

exports.findAll = (req, res) => {
    User.findAll({
        where: {}
    })
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving users."
        });
    });
}