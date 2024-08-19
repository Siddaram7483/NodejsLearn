import {EventEmitter}from 'events';
const myEmitter = new EventEmitter();


function greetHandler(name){
  console.log('hello world  ' + name);
}
function goodbyeHnadler(name){
  console.log('goodbye world ' +name);
}
//registered events listeners
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHnadler);

//emit events
myEmitter.emit('greet','sidd');
myEmitter.emit('goodbye','sidd');

//Error handling

// myEmitter.on('error',(err)=>{
//   console.log('an error occured:', err);
// });

// //simulate error
// myEmitter.emit('error', new Error('something went wrong'));

