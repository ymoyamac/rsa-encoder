import NodeRSA from 'node-rsa';

export interface FilenameStructure {
  name: string;
  extension: string;
}

export interface EncryptOptions {
  key?: NodeRSA;
  filenameToRead: FilenameStructure;
  newFilename: string;
}

export interface DecryptOptions {
  key: NodeRSA;
  encryptedInformation?: string;
  filePath: string;
}
