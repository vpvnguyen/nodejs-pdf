const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API SERVER RUNNING");
});

app.post("/pdf", (req, res) => {
  res.json("pdf");
});

app.listen(PORT, () => console.log(`API running on ${PORT}`));
