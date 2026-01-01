const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Medicare Hospital Management System Running");
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log("Server started on port 3000");
    });