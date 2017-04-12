const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "something went wrong");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
