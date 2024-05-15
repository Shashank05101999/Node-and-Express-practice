const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const users = require("../practice7/MOCK_DATA.json");
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
    firstName: body.first_name,
    lastName: body.last_Name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "success" });
});
app.listen(port, () => console.log(`Server stared`));
