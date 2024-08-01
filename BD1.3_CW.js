const express = require("express");
const app = express();

app.get("/check-number",(req,res)=>{
  const number = Number.parseFloat(req.query.number);
  let result = '';
  if(number < 0){
    result = 'Number is negative';
  }
  else if(number >=0){
    result = 'Number is positive';
  }
  res.send(result);
})

app.get('/check-even-odd',(req,res)=>{
  const number = Number.parseInt(req.query.number);
  let result = '';
  if(number%2 === 0){
    result = 'even';
  }
  else{
    result = 'odd';
  }
  res.send('Number is '+result);
})

app.get('/check-login',(req,res)=>{
  const isLoggedIn = ((req.query.isLoggedIn.toLowerCase() === 'false') ? false : true);
  let result = '';
  if(isLoggedIn){
    result = 'User is logged in';
  }
  else{
    result = 'User is not logged in';
  }
  res.send(result);
})

app.get('/check-discount',(req,res)=>{
  const age = Number.parseInt(req.query.age);
  let result = 'User is not eligible for a discount';
  if(age > 65){
    result = 'User is eligible for a discount';
  }
  res.send(result);
})

app.get('/check-number-type',(req,res)=>{
  const number = Number.parseFloat(req.query.number);
  let result = 'Number is ';
  if(number < 0){
    result+='negative';
  }
  else if(number > 0){
    result+='positive';
  }
  else{
    result+='zero';
  }
  res.send(result);
})

app.get('/check-temperature',(req,res)=>{
  const temperature = Number.parseFloat(req.query.temperature);
  let result = 'Temperature is ';
  if(temperature < 15)
    result += 'cold';
  else if(temperature <= 25 && temperature >= 15)
    result += 'warm'
  else
    result += 'hot';
  res.send(result);
})

app.get('/check-activity-level',(req,res)=>{
  const steps = Number.parseInt(req.query.steps);
  let result = 'Activity level is ';
  if(steps < 5000){
    result += 'low';
  }
  else if(steps >= 5000 && steps <= 10000){
    result += 'moderate';
  }
  else{
    result += 'high';
  }
  res.send(result);
})

app.get('/check-engagement',(req,res)=>{
  const likes = Number.parseInt(req.query.likes);
  let result = 'Engagement level is ';
  if(likes < 100)
    result += 'low';
  else if(likes >= 100 && likes <= 500)
    result += 'medium';
  else
    result += 'high';
  res.send(result);
})


app.listen(3000,()=>{
  console.log("GET is live");
})