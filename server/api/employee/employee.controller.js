const EmployeeModel = require('./employee.model');

exports.getEmployees = (req, res, next) => {

    EmployeeModel.find().then((employees) => {
        res.status(200).json({
            employees: employees,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });

};

exports.createEmployee = (req, res, next) => {
    const newEmployee = new EmployeeModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    newEmployee
        .save()
        .then((result) => {
            res.status(201).json({
                employee: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}


exports.getEmployeeById = (req, res, next) => {
    EmployeeModel.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(200).json({ msg: 'Employee not found' });
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};

exports.deleteEmployeeById = (req, res, next) => {
    EmployeeModel.findByIdAndDelete(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            msg: 'Employee not found'
        });
    });
};

exports.updateEmployee = (req, res, next) => {
    EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(202).json({ msg: 'Employee updated', data: result });
        }).catch(err => {
            res.status(404).json({ msg: 'Employee not found' });
        });
};