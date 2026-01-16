import { PdfAdapter } from "../interfaces/PdfAdapter";

export class ReportGenerator {

  // Utilizamos sempre uma abstração (interface), nunca uma classe concreta
  private adapter: PdfAdapter;

  constructor(adapter: PdfAdapter) {
    this.adapter = adapter;
  }

  generate(): void {
    const fileName = "meuArquivo.pdf";
    const content = "Conteúdo do PDF gerado via Adapter Pattern";

    this.adapter.generatePdf(fileName, content);
  }
}