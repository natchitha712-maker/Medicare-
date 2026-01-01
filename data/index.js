const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Medicare Hospital System is Online!");
  });

  app.get("/patients", (req, res) => {
    res.json([{ id: 1, name: "Aasiya", disease: "Fever" }]);
    });

    app.listen(3000, () => {
      console.log("Server is running!");
      });