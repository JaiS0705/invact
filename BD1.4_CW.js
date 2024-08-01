const express = require("express");
const app = express();

function getWelcomeMessage(){
  return 'Welcome to our service!';
}

function getGreetingMessage(userName){
  return `Hello, ${userName}!`;
}

function checkPasswordStrength(password){
  return password.length > 15 ? 'Password is strong':'Password is not wrong';
}

function getSum(num1,num2){
  return num1+num2;
}

function getSubscriptionStatus(userName,isSubscribed){
  return `${userName} is ${(isSubscribed)?'subscribed':'not subscribed'}`; 
}

function getDiscountedPrice(price,discount){
  return price-price*discount/100;
}

function getPersonalizedGreeting(age,gender,name){
  return `Hello, ${name}! You are a ${age} year old ${gender}`;
}

function getFinalPrice(price,discount,tax){
  const discountedPrice = getDiscountedPrice(price,discount);
  return discountedPrice + (discountedPrice*tax)/100
}

function getTotalExerciseTime(running,cycling,swimming){
  return running + cycling + swimming;
}

app.get('/welcome',(req,res)=>{
  res.send(getWelcomeMessage());
})

app.get('/greet',(req,res)=>{
  const username = req.query.username;
  res.send(getGreetingMessage(username));
})

app.get('/check-password',(req,res)=>{
  const password = req.query.password;
  res.send(checkPasswordStrength(password));
})

app.get('/sum',(req,res)=>{
  const [num1,num2] = [Number.parseInt(req.query.num1),Number.parseInt(req.query.num2)];
  res.send(getSum(num1,num2).toString());
})

app.get('/subscription-status',(req,res)=>{
  const [username,isSubscribed] = [req.query.username,(req.query.isSubscribed.toLowerCase() === 'false')?false:true];
  res.send(getSubscriptionStatus(username,isSubscribed));
})

app.get('/discounted-price',(req,res)=>{
  const [price,discount] = [Number.parseFloat(req.query.price),Number.parseFloat(req.query.discount)];
  res.send(getDiscountedPrice(price,discount).toString());
})

app.get('/personalized-greeting',(req,res)=>{
  const [age,gender,name] = [Number.parseInt(req.query.age),req.query.gender,req.query.name];
  res.send(getPersonalizedGreeting(age,gender,name))
})

app.get('/final-price',(req,res)=>{
  const [price,discount,tax] = [Number.parseFloat(req.query.price),Number.parseFloat(req.query.discount),Number.parseFloat(req.query.tax)];
  res.send(getFinalPrice(price,discount,tax).toString());
})

app.get('/total-exercise-time',(req,res)=>{
  const [running,cycling,swimming] = [Number.parseInt(req.query.running),Number.parseInt(req.query.cycling),Number.parseInt(req.query.swimming)];
  res.send(getTotalExerciseTime(running,cycling,swimming).toString());
})

app.listen(3000,()=>{
  console.log("GET is live");
})