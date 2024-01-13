const UserModel = require('./user.model');

exports.getUsers = (req, res, next) => {

    UserModel.find().then((users) => {
        res.status(200).json({
            users: users,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });

};

exports.createUser = (req, res, next) => {
    const newUser = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    newUser
        .save()
        .then((result) => {
            res.status(201).json({
                user: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}