import fs from 'fs';
import path from 'path'
import { FileContentOptions } from '../interfaces';

export class RSAFile {
  constructor(){}

  private verifyNameOfNewFile(name: string) {
    const filePath = path.join( './src/uploads');
    const dir = fs.readdirSync(filePath);
    console.log(dir);
    dir.forEach((file: string, index: number) => {
      const filenames: string[] = file.split('.');
      if (filenames[0] === name) {
        name = `${name} (${index})`;
      }
    });
    return name;
  }

  public readFileContent(path: string): string | Buffer | undefined | void {
    try {
      const data: string = fs.readFileSync(path, 'utf-8');
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  public writeEncryptedContentToFile({ file, content }: FileContentOptions): void {
    try {
      fs.writeFileSync(`./src/uploads/${file.name}.${file.extension || 'rsa'}`, content);
    } catch (error) {
      console.error(error);
    }
  }
}