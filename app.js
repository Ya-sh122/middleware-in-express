const express = require('express');
const app = express();

function addUser(req,res,next){
  req.user : 'Guest';
  next();
}

app.get('/message', addUser, (req,res)=>{
  res.send(`<h1>Welcome ${req.user}!</h1>`);
});

app.listen(3000,()=>{console.log('Server is running at port 3000')});
