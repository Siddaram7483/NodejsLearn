import crypto from 'crypto';

// Create a hash object using a valid hashing algorithm (e.g., 'sha256')
// const hash = crypto.createHash('sha256');

// // Update the hash with data
// hash.update('password1234');

// // Output the digest in hexadecimal format
// console.log(hash.digest('hex'));


//randomBytes()
// crypto.randomBytes(16,(err,buf)=>{
//   if(err) throw err;
//   console.log(buf.toString('hex'));
// });

//createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('hello, this is secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);