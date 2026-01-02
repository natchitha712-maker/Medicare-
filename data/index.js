const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Medicare Hospital Server Running ✅");
  });

  const patients = require("./patients.json");

  app.get("/patients", (req, res) => {
    res.json(patients);
    });

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running 