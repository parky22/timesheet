const express = require('express');
const router = express.Router();
const Employees = require('../db/models/employee');

router.get('/', (req, res, next) => {
  res.send('hello, got to employees');
});

router.get('/:id', (req, res, next) => {

})

module.exports = router;