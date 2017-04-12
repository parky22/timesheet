const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/employees', require('./routes/employees-route'));

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'something went wrong');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
