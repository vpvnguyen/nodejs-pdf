const PDFDocument = require("pdfkit");

class PdfController {
  static getPdf = (res) => {
    // Create a document
    const doc = new PDFDocument();

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Access-Control-Allow-Origin": "*",
      "Content-Disposition": "attachment; filename=test.pdf",
    });

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
  };

  static createPdf = (text, res) => {
    // Create a document
    const doc = new PDFDocument();

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Access-Control-Allow-Origin": "*",
      "Content-Disposition": "attachment; filename=test.pdf",
    });

    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(res);

    // Embed a font, set the font size, and render some text
    doc.font("Times-Roman").fontSize(25).text(text, 100, 100);

    // Finalize PDF file
    doc.end();
  };
}

module.exports = PdfController;
