import { PdfAdapter } from "../interfaces/PdfAdapter";
import PDFDocument from "pdfkit";
import { FileStorageAdapter } from "../interfaces/FileStorageAdapter";

export class PdfKit implements PdfAdapter {

  // A classe não sabe qual será a implementação de FileStorageAdapter, e ela não precisa saber.
  private fileStorageAdapter: FileStorageAdapter;

  constructor(fileStorageAdapter: FileStorageAdapter) {
    this.fileStorageAdapter = fileStorageAdapter;
  }

  // Geração de pdf usando a biblioteca pdfkit
  generatePdf(fileName: string, content: string): void {
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => {
      const dir = "adapter/reports";
      const pdfBuffer = Buffer.concat(chunks);
      this.fileStorageAdapter.saveFile(dir, fileName, pdfBuffer);
      console.log(`PDF gerado em: ${dir}/${fileName}`);
    });

    doc.fontSize(14).text(content, { align: "left" });
    doc.end();
  }

}