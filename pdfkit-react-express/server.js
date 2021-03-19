const express = require("express");
const cors = require("cors");
const PdfController = require("./controllers/Pdf.controller");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API SERVER RUNNING");
});

app.get("/get-pdf", async (req, res) => {
  try {
    PdfController.getPdf(res);
  } catch (error) {
    console.error(error);
  }
});

app.post("/create-pdf", async (req, res) => {
  try {
    const text = req.body;
    PdfController.createPdf(text, res);
  } catch (error) {
    console.error(error);
  }
});

app.post("/store-pdf", (req, res) => {
  try {
    const text = req.body;
    PdfController.storePdf(text, res);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`API running on ${PORT}`));
