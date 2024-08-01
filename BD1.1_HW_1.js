let express = require("express");
let app = express();

app.get('/whisper',(req,res)=>{
  const name = req.query.name;
  res.send(name.toLowerCase());
})

app.get('/full-product-name',(req,res)=>{
  const [companyName,productName] = [req.query.companyName,req.query.productName];
  res.send(companyName+" "+productName);
})

app.get('/date',(req,res)=>{
  const [month,year] = [req.query.month,req.query.year];
  const formattedDate = month+"/"+year;
  res.send(formattedDate);
})

app.get('/greet',(req,res)=>{
  const city = req.query.city;
  const greeting = `You live in ${city}`;
  res.send(greeting);
})

app.get('/capital',(req,res)=>{
  const [capital,country] = [req.query.capital,req.query.country];
  const countryCapital = `${capital} is the capital of ${country}`;
  res.send(countryCapital);
})

app.get('/email',(req,res)=>{
  const [firstName,lastName,domain] = [req.query.firstName,req.query.lastName,req.query.domain];
  const email = firstName+'.'+lastName+'@'+domain;
  res.send(email);
})

app.listen(3000, () => {
  console.log("GET is live");
});