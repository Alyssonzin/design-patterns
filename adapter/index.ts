import { ReportGenerator } from "./service/PdfGenerator";
import { PdfKit } from "./service/PdfKitAdapter";

const pdfKit = new PdfKit();

//Nosso gerador de relatórios agora utiliza o PdfKit através da interface PdfAdapter
const reportGenerator = new ReportGenerator(pdfKit);

reportGenerator.generate();