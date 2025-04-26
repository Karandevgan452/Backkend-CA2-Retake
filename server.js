const express = require("express");
const app = express();

app.use(express.json());
const PORT = 5000;

app.post("/user", (req, res) => {
  const { email, password } = req.body;
  const user = req.body;

  if (!email) return res.status(400).json("Email cannot be empty");
  if (!password) return res.status(400).json("Password cannot be empty");
  return res.status(201).json(user);
});
app.listen(PORT, () => {
  console.log("Server running on Port : " + PORT);
});
