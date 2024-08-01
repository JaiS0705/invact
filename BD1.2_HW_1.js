const express = require("express");
const app = express();

app.get("/total-marks",(req,res)=>{
  const [marks1,marks2] = [req.query.marks1,req.query.marks2];
  const totalMarks = Number.parseFloat(marks1) + Number.parseFloat(marks2) + '';
  res.send(totalMarks)
});

app.get("/total-weight",(req,res)=>{
  const [weight1,weight2,weight3] = [req.query.weight1,req.query.weight2,req.query.weight3];
  const totalWeight = Number.parseFloat(weight1) + Number.parseFloat(weight2) + Number.parseFloat(weight3) + '';
  res.send(totalWeight);
})

app.get("/monthly-salary",(req,res)=>{
  const annualSalary = req.query.annualSalary;
  const monthlySalary = parseFloat(annualSalary/12)+'';
  res.send(monthlySalary);

})

app.get("/total-pages",(req,res)=>{
  const [pagesPerDay,days] = [req.query.pagesPerDay,req.query.days];
  const totalPages = Number.parseFloat(pagesPerDay)*Number.parseFloat(days) + '';
  res.send(totalPages);
})

app.get("/currency-conversion",(req,res)=>{
  const [amount,exchangeRate] = [req.query.amount,req.query.exchangeRate];
  const convertedAmount = amount*exchangeRate+'';
  res.send(convertedAmount);
})

app.get("/average-sales",(req,res)=>{
  const [sales1,sales2,sales3] = [req.query.sales1,req.query.sales2,req.query.sales3];
  const avgSales = ((Number.parseFloat(sales1) + Number.parseFloat(sales2) + Number.parseFloat(sales3))/3).toFixed(2) + '';
  res.send(avgSales);
})

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})