const express = require('express');
const router = express.Router();
const Time = require('../db/models/time');

// create a new time instance with timeIn
router.post('/', (req, res, next) => {
  Time.create(req.body)
    .then(createdTime => {
      createdTime.setEmployee(req.params.id);
    })
    .catch(next);
});

// update correlating timeIn with timeOut
router.put('/:id', (req, res, next) => {
  Time.update(req.body, {
    where: { id },
    returning: true
  })
    .then(updatedTime => res.json(updatedTime))
    .catch(next);
})

module.exports = router;
