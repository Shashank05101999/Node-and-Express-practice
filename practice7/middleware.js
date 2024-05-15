const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("connection success"))
  .catch((err) => console.log("connection err", err));
//schema
const userschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", userschema);

// middleware -plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("middleware is one");
  req.Myusername = " shashank ";
  next();
 
});
app.use((req, res, next) => {
  console.log("middle is two", req.Myusername);
  next()
});

//routes
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((users) => `<li>${users.first_name}</li>`).join(" ")}
  </ul>
  `;
  res.send(html);
});
//Rest API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const users = users.find((users) => users.id === id);
    return res.json(users);
  })
  .patch((req, res) => {
    // TODO: Edit with ID
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // TODO: delete with id
    return res.json({ status: "pending" });
  });
app.post("/api/users", (req, res) => {
  // TODO: create with user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_Name ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "All fields are req.." });
  }
   const result = await Users.create({
    firstName:body.first_name,
  lastName:body.last_Name,
  email:body.email, 
  gender:body.gender,
  jobTitle:body.jobTitle
  });
   console.log("result",result);
  return res.status(201).json({msg:"success"})
});
app.listen(port, () => console.log(`Server stared`));
