const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./dbconnect/dbconnect');
const lessonRoute = require('./routes/lessonRoute');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

dbConnect();
app.use('/api/v1/lesson', lessonRoute);
app.get('/', (req, res) => {
  res.json({
    message: 'adeope_assignment',
  });
});

app.listen(port, () => {
  console.log(`server is runnning on ${port}`);
});
