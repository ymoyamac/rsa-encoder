import { RSAEncoder, RSAFile } from './models';

const rsaFile: RSAFile = new RSAFile();
const rsa = new RSAEncoder(rsaFile);

rsa.encrypt({
  filenameToRead: {
    name: 'cifrar',
    extension: 'txt'
  },
  newFilename: {
    name: 'newFile',
    extension: 'rsa'
  },
});

rsa.decrypt({
  filenameToRead: {
    name: 'newFile',
    extension: 'rsa'
  },
});
