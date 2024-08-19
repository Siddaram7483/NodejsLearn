import path from 'path';

const filePath = 'dir1/dir2/test.txt';
import url from 'url';
 
console.log(path.basename(filePath));// basename()
console.log(path.dirname(filePath)); //directoryname()
console.log(path.extname(filePath));// extensioname()
console.log(path.parse(filePath));// all parsed elements 

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
console.log(__filename,__dirname);

//join()
const filePath2 = path.join(__dirname,'dir1','dir2','test.txt');
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirname,'dir1','dir2','test.txt');
console.log(filePath3);
