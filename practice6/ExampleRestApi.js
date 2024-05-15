const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

// middleware -plugin
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((users) => `<li>${users.first_name}</li>`).join(" ")}
  </ul>
  `;
  res.send(html);
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
  users.push({...body,id: users.length + 1});
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});

app.listen(port, () => console.log(`Server stared`));
