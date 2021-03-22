const PDFDocument = require("pdfkit");
const fs = require("fs");
class PdfController {
  static getPdf = (res) => {
    const doc = new PDFDocument();

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Access-Control-Allow-Origin": "*",
      "Content-Disposition": "attachment; filename=getPdf.pdf",
    });

    doc.pipe(res);

    doc
      .font("Times-Roman")
      .fontSize(25)
      .text("Some text with an embedded font!", 100, 100);

    doc.end();
  };

  static createPdf = (text, res) => {
    const doc = new PDFDocument();

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Access-Control-Allow-Origin": "*",
      "Content-Disposition": "attachment; filename=createPdf.pdf",
    });

    doc.pipe(res);

    doc.font("Times-Roman").fontSize(25).text(text, 100, 100);

    doc.end();
  };

  static storePdf = (text) => {
    const doc = new PDFDocument();

    const pdfOutputDirectory = "./pdf-output";

    if (!fs.existsSync(pdfOutputDirectory)) fs.mkdirSync(pdfOutputDirectory);

    doc.pipe(
      fs.createWriteStream(`${pdfOutputDirectory}/output-${new Date()}.pdf`)
    );

    doc.font("Times-Roman").fontSize(25).text(text, 100, 100);

    doc.end();
  };
}

module.exports = PdfController;
