const express = require('express');
const router = express.Router();
const Time = require('../db/models/time');
const Employee = require('../db/models/employee');

// create a new time instance with timeIn
router.post('/:employeeId', (req, res, next) => {
  Time.create(req.body)
    .then(createdTime => {
      return Employee.findById(req.params.employeeId)
        .then(foundEmployee => {
          return createdTime.setEmployee(foundEmployee);
        })
    })
    .then(time => {
      res.json(time);
    })
    .catch(next);
});

// update correlating timeIn with timeOut
router.put('/:timeInId', (req, res, next) => {
  Time.update(req.body, {
    where: { id: req.params.timeInId },
    returning: true
  })
    .spread((_numUpdated, updatedTime) => {
      const time = updatedTime[0];
      res.json(time);
    })
    .catch(next);
})

module.exports = router;
