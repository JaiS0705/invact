const express = require("express");
const app = express();

app.get("/check-bmi",(req,res)=>{
  const [height,weight] = [Number.parseFloat(req.query.height),Number.parseFloat(req.query.weight)];
  const BMI = (weight/(height*height));
  let result = 'BMI category is ';
  if(BMI < 18.5){
    result += 'underweight';
  }
  else if(BMI < 24.9){
    result += 'normal weight';
  }
  else if(BMI < 29.9){
    result += 'Overweight';
  }
  else{
    result += 'Obese';
  }
  res.send(result);
})

app.get('/check-performance',(req,res)=>{
  const grade = Number.parseInt(req.query.grade);
  let result = 'Academic performance is ';
  if(grade >= 90)
    result += 'excellent';
  else if(grade >= 75)
    result += 'good';
  else if(grade >= 50)
    result += 'average';
  else
    result += 'poor';
  res.send(result);
})

app.get('/check-age-group',(req,res)=>{
  const age = Number.parseInt(req.query.age);
  let result = 'Age group is ';
  if(age <= 12)
    result += 'child';
  else if(age <= 17)
    result += 'teenager';
  else if(age <= 64)
    result += 'adult';
  else
    result += 'senior';
  res.send(result);
})

app.get('/check-loan-eligibility',(req,res)=>{
  const creditScore = Number.parseInt(req.query.creditScore);
  let result = 'Loan eligibility is '
  if(creditScore >= 750)
    result += 'high';
  else if(creditScore >= 650)
    result += 'medium';
  else
    result += 'low';
  res.send(result);
})

app.get('/check-tax-bracket',(req,res)=>{
  const income = Number.parseFloat(req.query.income);
  let result = '';
  if(income <= 500000)
    result = '10';
  else if(income <= 1000000)
    result = '15';
  else if(income <= 1500000)
    result = '20';
  else
    result = '30';
  res.send('You fall under the '+result+'% tax bracket');
})


app.listen(3000,()=>{
  console.log("GET is live");
})