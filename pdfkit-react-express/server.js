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

app.get("/pdf", async (req, res) => {
  try {
    const PDFDocument = require("pdfkit");

    // Create a document
    const doc = new PDFDocument();

    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(res);

    // Embed a font, set the font size, and render some text
    doc
      .font("Times-Roman")
      .fontSize(25)
      .text("Some text with an embedded font!", 100, 100);

    // Finalize PDF file
    doc.end();
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`API running on ${PORT}`));
