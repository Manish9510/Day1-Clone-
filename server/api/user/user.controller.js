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


exports.getUserById = (req, res, next) => {
    UserModel.findById(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}; 

exports.findByIdAndDelete=(req,res,next) => {
    UserModel.findByIdAndDelete(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error:err
        });
    });
};