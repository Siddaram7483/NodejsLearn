// //  import fs from 'fs';
// // //readFile() - callback
// // fs.readFile('./test.txt','utf8',(err,data)=>{
// //   if(err)throw err;
// //   console.log(data);
// // });

// // //readFileSync()- synchronous version
// // const data=fs.readFileSync('./test.txt','utf8');
// // console.log(data);
// // import { writeFile } from 'fs';
import fs from "fs/promises";
readFile()- promise.then()

fs.readFile('./test.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', "hello i am writing this file");
    console.log("file written too..");
  } catch (error) {
    console.log(error);
  }
};

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("file appended too");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();

// import fs from 'fs/promises';

// const readFile = async () => {
//   try {
//     const data = await fs.readFile('./test.txt', 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const writeFile = async () => {
//   try {
//     await fs.writeFile('./test.txt', 'hello i am writing this file');
//     console.log('file written too..');
//   } catch (error) {
//     console.log(error);
//   }
// }

// const appendFile = async () => {
//   try {
//     await fs.appendFile('./test.txt', '\nThis is appended text');
//     console.log('file appended too');
//   } catch (error) {
//     console.log(error);
//   }
// }

// const main = async () => {
//   await writeFile();
//   await appendFile();
//   await readFile();
// }
