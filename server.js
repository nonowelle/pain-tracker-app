const express = require('express');
const cors = require('cors');
// const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
// const bodyParser = require('bodyParser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.listen(port);
