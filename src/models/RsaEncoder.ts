import NodeRSA from 'node-rsa';
import { FilenameOptions } from '../interfaces';
import { RSAFile } from './RSAFile';

export class RSAEncoder {
  private PATH: string = `./src/uploads`;
  private key: NodeRSA = new NodeRSA({ b: 512 });

  constructor(
    private readonly rsaFile: RSAFile,
    private bits?: number,
    private exp?: number
  ) {}

  private generateNodeRSAKey = (): NodeRSA => {
    //this.key.generateKeyPair(this.bits, this.exp);
    return this.key;
  }


  public encrypt({ filenameToRead, newFilename, }: FilenameOptions): string | void {
    try {
      const path = `${this.PATH}/${filenameToRead.name}.${filenameToRead.extension}`;
      const data = this.rsaFile.readFileContent(path) as string;
      console.log(data);
      const encrypted: string = this.key.encrypt(
        data,
        'base64'
      );
      if (!encrypted) {
        throw new Error('Oops... Someting went wrong');
      }
      this.rsaFile.writeEncryptedContentToFile({
        file: { name: newFilename!.name, extension: 'rsa' },
        content: encrypted,
      });
      console.log('encrypted: ', encrypted);
      return encrypted;
    } catch (error) {
      console.log(error);
    }
  }

  public decrypt({filenameToRead}: FilenameOptions): void {
    const path = `${this.PATH}/${filenameToRead.name}.${filenameToRead.extension}`;
    const encryptedInformation = this.rsaFile.readFileContent(path) as string;
    const decrypted = this.key.decrypt(encryptedInformation, 'utf8');
    if (!decrypted) {
      throw new Error('Oops... Someting went wrong');
    }
    console.log('decrypted: ', decrypted);
    console.log('size: ', this.key.getKeySize());
  }
}
