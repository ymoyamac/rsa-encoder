import { RSAEncoder } from './models';

const rsa = new RSAEncoder();

rsa.encrypt({
  filenameToRead: {
    name: 'cifrar',
    extension: 'txt'
  },
  newFilename: 'newFilenameGenerated',
});
