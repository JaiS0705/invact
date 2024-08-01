let express = require("express");
let app = express();

app.get('/check-whole-number',(req,res)=>{
  const number = Number.parseInt(req.query.number);
  let result = 'Number is ';
  if(number >= 0)
    result += 'whole number';
  else
    result += 'not a whole number';
  res.send(result);
})

app.get('/check-equal',(req,res)=>{
  const [num1,num2] = [Number(req.query.num1),Number(req.query.num2)];
  let result = 'Numbers are ';
  if(num1 === num2)
    result += 'equal';
  else
    result += 'not equal';
  res.send(result);
})

app.get('/check-active',(req,res)=>{
  const isActive = (req.query.isActive.toLowerCase())==='false'?false:true;
  let result = 'User is ';
  if(isActive)
    result += 'active';
  else
    result += 'not active';
  res.send(result);
})

app.get('/check-discount',(req,res)=>{
  const cost = Number(req.query.cost);
  let result = `User is ${cost<=1000?'not':''} eligible for a discount`;
  res.send(result);  
})

app.get('/check-experience',(req,res)=>{
  const workExperience = Number.parseInt(req.query.workExperience);
  let result = '';
  if(workExperience > 0){
    result = 'experienced'
  }
  else if(workExperience < 0){
    result = 'non-working';
  }
  else{
    result = 'fresher';
  }
  res.send(result);
})

app.get('/check-result',(req,res)=>{
  const result = Number.parseInt(req.query.result);
  let grade = '';
  if(result > 80){
    grade = 'A';
  }
  else if(result >= 50 && result <= 80){
    grade = 'B';
  }
  else{
    grade = 'Fail';
  }
  res.send(grade);
});

app.get('/check-attendance',(req,res)=>{
  const attendance = Number.parseInt(req.query.attendance);
  let result = 'Attendance is ';
  if(attendance > 90){
    result += 'high';
  }
  else if(attendance >= 50 && attendance <= 90){
    result += 'moderate';
  }
  else{
    result += 'low';
  }
  res.send(result);
})

app.get('/check-rating',(req,res)=>{
  const stars = Number.parseInt(req.query.stars);
  let result = 'Restaurant rating is ';
  if(stars < 3){
    result += 'low'
  }
  if(stars <= 4){
    result += 'moderate';
  }
  else
    result += 'high';
  res.send(result);
})


app.listen(3000,()=>{
  console.log("GET is live");
})
