import { ImageProcessorInterface } from "../interfaces/ImageProcessorInterface";
import { NodeFS } from "./NodeFS";

export class WaterMarkImageProcessor implements ImageProcessorInterface {
  private imageProcessor: ImageProcessorInterface;
  private waterMarkText: string;

  constructor(imageProcessor: ImageProcessorInterface, waterMarkText: string) {
    this.imageProcessor = imageProcessor;
    this.waterMarkText = waterMarkText;
  }

  processImage(imagePath: string): string {
    imagePath = this.imageProcessor.processImage(imagePath);

    //Abre uma imagem e adiciona uma marca d'água...

    const dir = imagePath.substring(0, imagePath.lastIndexOf("/"));
    const newFileName = "imageWithWatermark.jpg";

    const nodeFs = new NodeFS();
    nodeFs.saveFile(dir, newFileName, Buffer.from([])); // Simula a criação do arquivo

    const imageWithWatermarkPath = `${dir}/${newFileName}`;
    return imageWithWatermarkPath;
  }
}