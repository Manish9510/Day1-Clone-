var express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB).then(()=>{
  console.log('Database connection established');
}).catch((error) => {
  console.log(error);
  console.log('Error Connecting to Mongo')
})
var usersRouter = require('./api/user/user.route.');

var app = express();

app.use((req , res , next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','*');
  next();  
});

app.use(express.json());
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
