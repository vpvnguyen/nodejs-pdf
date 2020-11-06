# nodejs-pdf

Experimental sandbox for generating PDF in Nodejs

## pdfkit

- Example works out of the box
- FS stream by default
- Not included:
- - fonts (downloaded separately)
- Workflow

```javascript
const PDFDocument = require("pdfkit");
const fs = require("fs");

// Create a document
const doc = new PDFDocument();
const date = new Date();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream(`output/output_${date}.pdf`));

// Embed a font, set the font size, and render some text
doc
  .font("fonts/PalatinoBold.ttf")
  .fontSize(25)
  .text("Some text with an embedded font!", 100, 100);

// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image("images/test.png", {
  fit: [250, 300],
  align: "center",
  valign: "center",
});

// Add another page
doc.addPage().fontSize(25).text("Here is some vector graphics...", 100, 100);

// Draw a triangle
doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");

// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc
  .scale(0.6)
  .translate(470, -380)
  .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
  .fill("red", "even-odd")
  .restore();

// Add some text with annotations
doc
  .addPage()
  .fillColor("blue")
  .text("Here is a link!", 100, 100)
  .underline(100, 100, 160, 27, { color: "#0000FF" })
  .link(100, 100, 160, 27, "http://google.com/");

// Finalize PDF file
doc.end();
```

## pdf-lib

```javascript
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
```
