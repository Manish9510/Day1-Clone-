var express = require('express');
var router = express.Router();
const employeeController = require('./employee.controller')

router.get('/', employeeController.getEmployees);

router.get('/:id', employeeController.getEmployeeById)

router.post('/', employeeController.createEmployee);

router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployeeById);

module.exports = router;