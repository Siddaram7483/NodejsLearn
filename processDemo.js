console.log(process); // Prints the process object
console.log(process.argv); // Prints the arguments passed to the Node.js process
console.log(process.argv[3]); // Prints the fourth argument passed to the process

// Accessing environment variables
console.log(process.env); // Prints all environment variables
console.log(process.env.LOGNAME || process.env.USERNAME); // Use LOGNAME for Unix-like or USERNAME for Windows

console.log(process.cwd()); // Prints the current working directory

console.log(process.title); // Prints the current process title
console.log(process.memoryUsage()); // Prints memory usage statistics
console.log(process.uptime()); // Prints the number of seconds the current Node.js process has been running
process.on('exit',(code)=>{
  console.log(`about to exit with code:${code}`);
})

//exit()
// process.exit(0);
// console.log('hello from after exit');

