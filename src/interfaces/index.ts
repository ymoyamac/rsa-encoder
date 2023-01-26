import NodeRSA from 'node-rsa';

export interface FilenameStructure {
  name: string;
  extension?: string;
}

export interface FilenameOptions {
  filenameToRead: FilenameStructure;
  newFilename?: FilenameStructure;
}

export interface DecryptOptions {
  key: NodeRSA;
  encryptedInformation?: string;
  filePath: string;
}

export interface FileContentOptions {
  path?: string;
  file: FilenameStructure;
  content: string
}
