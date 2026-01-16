import { NodeFS } from "./NodeFS";
import { ImageProcessorInterface } from "../interfaces/ImageProcessorInterface";

export class BorderImageProcessor implements ImageProcessorInterface {
  private imageProcessor: ImageProcessorInterface;

  constructor(imageProcessor: ImageProcessorInterface) {
    this.imageProcessor = imageProcessor;
  }

  processImage(imagePath: string): string {
    imagePath = this.imageProcessor.processImage(imagePath);

    //Abre uma imagem e adiciona uma borda...

    const dir = imagePath.substring(0, imagePath.lastIndexOf("/"));
    const newFileName = "imageWithBorder.jpg";

    const nodeFs = new NodeFS();
    nodeFs.saveFile(dir, newFileName, Buffer.from([])); // Simula a criação do arquivo

    const imageWithBorderPath = `${dir}/${newFileName}`;
    return imageWithBorderPath;
  }
}