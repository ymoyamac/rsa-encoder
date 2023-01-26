import { RsaEncryption } from './models';

const rsa = new RsaEncryption();

rsa.encrypt({
  filenameToRead: {
    name: 'cifrar',
    extension: 'txt'
  },
  newFilename: 'newFilenameGenerated',
});
