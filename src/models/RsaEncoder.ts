import fs from 'fs';
import NodeRSA from 'node-rsa';
import { DecryptOptions, EncryptOptions } from '../interfaces';

export class RSAEncoder {
  
  private PATH: string = `./src`;

  constructor(
    private bits?: number,
    private exp?: number
  ){}

  private generateNodeRSAKey = (): NodeRSA => {
    const key = new NodeRSA({ b: 512 });
    //key.generateKeyPair(this.bits, this.exp);
    return key;
  }

  private verifyNameOfNewFile() {
    console.log(this.PATH);
    const dir = fs.readdirSync(this.PATH);
    console.log(dir)
  }

  public encrypt({ filenameToRead, newFilename }: EncryptOptions): string | void {
    try {
      this.verifyNameOfNewFile()
      const data: string = fs.readFileSync(
        `./src/uploads/${filenameToRead.name}.${filenameToRead.extension}`,
        'utf-8'
      );
      console.log(data)
      const encrypted: string = this.generateNodeRSAKey().encrypt(data, 'base64');
      if (!encrypted) {
        throw new Error('Oops... Someting went wrong');
      }
      fs.writeFileSync(`./src/uploads/${newFilename}.rsa`, encrypted);
      console.log('encrypted: ', encrypted);
      return encrypted;
    } catch (error) {
      console.log(error);
    }
  }

  public decrypt({ filePath }: DecryptOptions): void{
    const encryptedInformation: string = fs.readFileSync(
      `${filePath}`,
      'utf-8'
    );
    const decrypted = this.generateNodeRSAKey().decrypt(encryptedInformation, 'utf8');
    console.log('decrypted: ', decrypted);
    console.log('size: ', this.generateNodeRSAKey().getKeySize());
  }
}
