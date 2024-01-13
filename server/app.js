var express = require('express');
var usersRouter = require('./api/user/user.route.');

var app = express();

app.use((req , res , next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','*');  
})

app.use(express.json());
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
