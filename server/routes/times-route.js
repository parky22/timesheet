const express = require('express');
const router = express.Router();
const Time = require('../db/models/time');

router.post('/:id', (req, res, next) => {
  Time.create(req.body)
    .then(createdTime => {
      createdTime.setEmployee(req.params.id);
    })
    .catch(next);
});

module.exports = router;
