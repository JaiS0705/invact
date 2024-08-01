let express = require("express");
let app = express();

app.get("/total-distance", (req, res) => {
  const [distance1, distance2] = [req.query.distance1, req.query.distance2];
  const totalDistance = `${Number.parseFloat(distance1) + Number.parseFloat(distance2)}`;
  res.send(totalDistance);
});

app.get("/total-time", (req, res) => {
  const [time1, time2, time3] = [
    req.query.time1,
    req.query.time2,
    req.query.time3,
  ];
  const totalTime = `${Number.parseFloat(Number.parseFloat(time1) + Number.parseFloat(time2) + Number.parseFloat(time3)).toFixed(1)}`;
  res.send(totalTime);
});

app.get('/average-speed',(req,res)=>{
  const [totalDistance,totalTime] = [req.query.totalDistance,req.query.totalTime];
  const averageSpeed = Number.parseFloat(Number.parseFloat(totalDistance)/Number.parseFloat(totalTime));
  res.send(averageSpeed+'');
})

app.get('/eta',(req,res)=>{
  const [distance,speed] = [req.query.distance,req.query.speed];
  const eta = Number.parseFloat(Number.parseFloat(distance)/Number.parseFloat(speed))+'';
  res.send(eta);
})

app.get('/total-calories',(req,res)=>{
  const [duration1,duration2,caloriesPerMinute] = [req.query.duration1,req.query.duration2,req.query.caloriesPerMinute];
  const totalCalories = (Number.parseFloat(duration1) + Number.parseFloat(duration2))*(Number.parseFloat(caloriesPerMinute)) + '';
  res.send(totalCalories);
})

app.get('/interest-earned',(req,res)=>{
  const [principal,rate,time] = [req.query.principal,req.query.rate,req.query.time];
  const interestEarned = Number.parseFloat(Number.parseFloat(principal)*Number.parseFloat(rate)*Number.parseFloat(time))/100 + '';
  res.send(interestEarned);

})

app.listen(3000, () => {
  console.log("GET is live");
});
