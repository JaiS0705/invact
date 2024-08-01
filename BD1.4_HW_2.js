const express = require("express");
const app = express();

function generateProfileUrl(username){
  return `https://www.github.com/${username}`;
}
function generateCertificate(firstName,lastName,courseName){
  return `This certification is awarded to ${firstName+' '+lastName} for completing the course ${courseName}`
}

function calculateGrade(math,science,english){
  const gradeInPercentage = Math.ceil(((math+science+english)/300)*100);
  return `Your grade in percentage is ${gradeInPercentage}%`;

}

function splitBill(billAmount,numberOfFriends){
  return  `Each friend owes Rs. ${parseInt(billAmount/numberOfFriends)} against the bill`;
}
function calculateSalary(totalHours,hourlyWage){
  return `Your monthly salary is ₹${totalHours*hourlyWage}`;
}

app.get('/github-profile',(req,res)=>{
  const username = req.query.username;
  res.send(generateProfileUrl(username));
})

app.get('/certificate',(req,res)=>{
  const [firstName,lastName,courseName] = [req.query.firstName,req.query.lastName,req.query.courseName];
  res.send(generateCertificate(firstName,lastName,courseName));
})

app.get('/grade',(req,res)=>{
  const [math,science,english] = [Number.parseInt(req.query.maths),Number.parseInt(req.query.science),Number.parseInt(req.query.english)];
  console.log(math,science,english);
  res.send(calculateGrade(math,science,english));
})

app.get('/split-bill',(req,res)=>{
  const [billAmount,numberOfFriends] = [Number.parseInt(req.query.billAmount),Number.parseInt(req.query.numberOfFriends)];
  res.send(splitBill(billAmount,numberOfFriends));
})

app.get('/monthly-salary',(req,res)=>{
  const [totalHours,hourlyWage] = [Number.parseInt(req.query.totalHours),Number.parseInt(req.query.hourlyWage)];
  res.send(calculateSalary(totalHours,hourlyWage))
})

app.listen(3000,()=>{
  console.log("GET is live");
})
