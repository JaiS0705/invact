let express = require("express");
let app = express();
app.get("/shout", (req, res) => {
  let name = req.query.name;
  res.send(name.toUpperCase());
});
app.get("/fullName", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;
  res.send(fullName);
});
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ", " + year;
  res.send(formattedDate);
});
app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send("Namaste, " + name);
});
app.get('/address',(req,res)=>{
  const [street,city,state] = [req.query.street,req.query.city,req.query.state];
  res.send(street+', '+city+', '+state);
})
app.get('/email',(req,res)=>{
  const [userName,domain] = [req.query.username,req.query.domain];
  res.send(userName+'@'+domain);
})
app.listen(3000, () => {
  console.log("GET is live");
});