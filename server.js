const express = require('express');
const pool = require('./db/db');
const port = process.env.PORT;

const app = express();
app.set('view engine','ejs');

app.listen(port || 3000, () => {
  console.log(`app listening on port ${port}/`);
});