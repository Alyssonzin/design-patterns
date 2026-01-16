export interface PdfAdapter {
  generatePdf(fileName: string, content: string): void;
}