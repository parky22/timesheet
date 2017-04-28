const express = require('express');
const router = express.Router();
const Employees = require('../db/models/employee');
const Time = require('../db/models/time');

router.get('/', (req, res, next) => {
  Employees.findAll()
    .then(allEmployees => res.json(allEmployees))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Employees.findById(req.params.id)
    .then(foundEmployee => res.json(foundEmployee))
    .catch(next);
})

router.post('/', (req, res, next) => {
  Employees.create(req.body)
    .then(createdEmployee => res.json(createdEmployee))
    .catch(next);
});

module.exports = router;