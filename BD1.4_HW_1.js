const express = require("express");
const app = express();

function getWelcomeMessage(){
  return 'We will now learn functions!';
}

function getGreetingMessage(userName){
  return `Hey, ${userName}! Are you ready to learn functions with us?`;
}

function checkYearsOfExp(yearsOfExp){
  return (yearsOfExp > 0)?'You have some experience with functions. Great':'No worries. You will start writing functions in no time!';
}

function getTime(days,hours){
  return (days*hours).toString();
}

function getModuleCompletion(username,hasCompleted){
  return `${username} ${hasCompleted?'has':'has not'} completed the modules`; 
}

function getPersonalizedGreeting(city,name){
  return `Hey, ${name}! What's famous about ${city}?`;
}

function findAge(birthyear){
  return (2024-birthyear).toString();
}

function findRequiredTime(days,hours){
  const duration = getTime(days,hours);
  return `The time being dedicated is ${(duration >=30)?'':'not'} sufficient for learning functions`;
}


app.get('/welcome',(req,res)=>{
  res.send(getWelcomeMessage());
})

app.get('/greet',(req,res)=>{
  const username = req.query.username;
  res.send(getGreetingMessage(username));
})

app.get('/message',(req,res)=>{
  const yearsOfExp = Number.parseInt(req.query.yearsOfExp);
  res.send(checkYearsOfExp(yearsOfExp));
})

app.get('/hours',(req,res)=>{
  const [days,hours] = [Number.parseInt(req.query.days),Number.parseInt(req.query.hours)];
  res.send(getTime(days,hours));
})

app.get('/module-completion-status',(req,res)=>{
  const [username,hasCompleted] = [req.query.username,(req.query.hasCompleted.toLowerCase() === 'false')?false:true];
  res.send(getModuleCompletion(username,hasCompleted));
})

app.get('/personalized-greeting',(req,res)=>{
  const [city,name] = [req.query.city,req.query.name];
  res.send(getPersonalizedGreeting(city,name));
})

app.get('/find-age',(req,res)=>{
  const birthyear = Number.parseInt(req.query.birthyear);
  res.send(findAge(birthyear));
})

app.get('/is-time-sufficient',(req,res)=>{
  const [days,hours] = [Number.parseInt(req.query.days),Number.parseInt(req.query.hours)];
  res.send(findRequiredTime(days,hours));
})


app.listen(3000,()=>{
  console.log("GET is live");
})