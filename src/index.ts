import { RsaEncoder } from './models';

const rsa = new RsaEncoder();

rsa.encrypt({
  filenameToRead: {
    name: 'cifrar',
    extension: 'txt'
  },
  newFilename: 'newFilenameGenerated',
});
