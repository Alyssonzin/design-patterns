import path from "path";
import fs from 'fs';

export class NodeFS {

  saveFile(dir: string, fileName: string, data: Buffer): void {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, fileName), data);
  }

  readFile(dir: string, fileName: string): Buffer {
    return fs.readFileSync(path.join(dir, fileName));
  }

}