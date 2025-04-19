const express  = require('express');
const app = express() ;
const port = 3000;
const mongoose = require('mongoose');


app.use (express.json());
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log("Connected to DB!"))
  .catch(err => console.log("DB connection failed :(", err));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});