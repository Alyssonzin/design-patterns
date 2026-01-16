import { ReportGenerator } from "./service/PdfGenerator";
import { PdfKit } from "./service/PdfKit";
import { NodeFS } from "./service/NodeFS";

const nodeFs = new NodeFS();

//O pdfKit agora depende de um FileStorageAdapter para salvar os PDFs gerados
const pdfKit = new PdfKit(nodeFs);

/*
  Nosso gerador de relatórios agora utiliza o PdfKit através da interface PdfAdapter.
  Note que, se necessário, podemos substituir o PdfKit por qualquer outra biblioteca (desde que implemente a interface PdfAdapter).
*/
const reportGenerator = new ReportGenerator(pdfKit);

reportGenerator.generate();