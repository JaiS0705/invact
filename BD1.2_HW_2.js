const express = require("express");
const app = express();

app.get("/bmi",(req,res)=>{
  const [height,weight] = [Number.parseFloat(req.query.height),Number.parseFloat(req.query.weight)];
  const bmi = weight/(height*height);
  res.send(bmi.toFixed(2).toString());
})

app.get("/checkout",(req,res)=>{
  const [product,units,price] = [req.query.product,Number.parseFloat(req.query.units),Number.parseFloat(req.query.price)];
  const total_price = units*price;
  res.send(`Your total for ${units} ${product} is ${total_price}`);
})

app.get("/grade",(req,res)=>{
  const [maths,science,english] = [Number.parseInt(req.query.maths),Number.parseInt(req.query.science),Number.parseInt(req.query.english)];
  const gradeInPercentage = Math.ceil(Number.parseFloat(((maths+science+english)/300)*100));
  res.send(`Your grade in percentage is ${gradeInPercentage}%`);
})

app.get("/discounted-price",(req,res)=>{
  const [cartTotal,discount] = [Number.parseFloat(req.query.cartTotal),Number.parseFloat(req.query.discount)];
  const totalPrice = cartTotal - (cartTotal*discount/100);
  res.send(totalPrice.toString());
})

app.get("/split-bill",(req,res)=>{
  const [billAmount,numberOfFriends] = [Number.parseFloat(req.query.billAmount),Number.parseInt(req.query.numberOfFriends)];
  let splitAmount = billAmount / numberOfFriends;
  res.send(`Each friend owes Rs. ${splitAmount} against the bill`);
})

app.get("/celsius-to-fahrenheit",(req,res)=>{
  const celsius = Number.parseFloat(req.query.temperature);
  let fahrenheit = celsius * 9/5 + 32
  res.send(fahrenheit.toString()+' Fahrenheit');
})

app.get("/monthly-salary",(req,res)=>{
  const [totalHours,hourlyWage] = [Number(req.query.totalHours),Number(req.query.hourlyWage)];
  const monthlySalary = hourlyWage * totalHours;
  res.send(`Your monthly salary is ₹`+monthlySalary.toString()+' monthly');
})

app.listen(3000,()=>{
  console.log("GET is live");
})