const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

app

  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const users = users.find((users) => users.id === id);
    return res.json(users);
  })
  .patch((req, res) => {
    // Edit with ID
    return res.json({ Status: "pending" });
  })
  .delete((req, res) => {
    // delete with id
    return res.json({ Status: "pending" });
  });

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((users) => `<li>${users.first_name}</li>`).join(" ")}
  </ul>
  `;
  res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const users = users.find((users) => users.id === id);
  return res.json(users);
});

app.listen(port, () => console.log(`Server stared`));
