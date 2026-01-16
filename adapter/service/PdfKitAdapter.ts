import { PdfAdapter } from "../interfaces/PdfAdapter";
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";

export class PdfKit implements PdfAdapter {

  // Implementação usando pdfkit
  generatePdf(fileName: string, content: string): void {
    const doc = new PDFDocument();

    const reportsDir = path.resolve("adapter", "reports");
    fs.mkdirSync(reportsDir, { recursive: true });

    const outputPath = path.join(reportsDir, fileName);
    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    doc.fontSize(14).text(content, { align: "left" });
    doc.end();

    stream.on("finish", () => {
      console.log(`PDF gerado em: ${outputPath}`);
    });
  }

}