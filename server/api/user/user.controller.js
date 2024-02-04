const UserModel = require('./user.model');

exports.registerUser = async (req, res, next) => {
    try {
        const existingsUser = await UserModel.findOne({ email: req.body.email });
        if (existingsUser) {
            return res.status(400).json({
                message: 'User already registered'
            });
        } else {
            const newUser = new UserModel({ email: req.body.email, password: req.body.password });
            const result = await newUser.save();
            res.status(201).json({ message: 'User successfully registered' });
        }
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const existingsUser = await UserModel.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (existingsUser) {
            return res.status(201).json({
                message: 'User logged In'
            });
        } else {
            return res.status(403).json({
                message: 'Login failed'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}