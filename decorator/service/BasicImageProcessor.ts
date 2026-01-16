import { ImageProcessorInterface } from "../interfaces/ImageProcessorInterface";
import { NodeFS } from "./NodeFS";

export class BasicImageProcessor implements ImageProcessorInterface {

  processImage(imagePath: string): string {
    //Processamento básico de uma imagem...

    const dir = imagePath.substring(0, imagePath.lastIndexOf("/"));
    const fileName = imagePath.substring(imagePath.lastIndexOf("/") + 1);
    
    const nodeFs = new NodeFS();
    nodeFs.saveFile(dir, fileName, Buffer.from([])); // Simula a criação do arquivo
  
    const newImagePath = `${dir}/${fileName}.jpg`;
    return newImagePath;
  }
}