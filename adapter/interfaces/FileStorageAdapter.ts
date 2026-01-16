export interface FileStorageAdapter {
  saveFile(dir: string, fileName: string, data: Buffer): void;

  readFile(dir: string, fileName: string): Buffer;
}