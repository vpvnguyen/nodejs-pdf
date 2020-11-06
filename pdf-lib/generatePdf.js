const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fs = require("fs");

const generatePdf = async () => {
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();

  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  // Add a blank page to the document
  const page = pdfDoc.addPage();

  // Get the width and height of the page
  const { width, height } = page.getSize();

  // Draw a string of text toward the top of the page
  const fontSize = 30;
  page.drawText("Creating PDFs in JavaScript is awesome!", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // For example, `pdfBytes` can be:
  //   • Written to a file in Node
  //   • Downloaded from the browser
  //   • Rendered in an <iframe>

  return pdfBytes;
};

// custom
const writePdf = async () => {
  try {
    const filename = `output/output_${new Date()}.pdf`;
    const pdfFile = await generatePdf();
    await fs.writeFile(filename, pdfFile, (error) => {
      if (error) return console.log(`write error: ${error}`);
      console.log(`write success: ${filename}`);
    });
  } catch (error) {
    console.error(`error: ${error}`);
  }
};

writePdf();
