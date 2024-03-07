
const Express = require("express");
const app = Express();

app.get("/", (req, res) => {
  return res.send("hello  from Home page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello  ${req.query.name}`);
});

 app.listen(8000,()=>{ console.log("server starte");})
