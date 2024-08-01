const express = require("express");
const app = express();

/*function getWelcomeMessage(){
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
*/
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


