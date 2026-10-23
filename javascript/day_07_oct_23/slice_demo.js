let str = 'Javascript Training';

console.log(str.slice(4, 10));      // script
console.log(str.substring(4, 10));  // script

// substring() cannot accept negative indexes. slice() does.
console.log(str.slice(4, -3));       // script Train
console.log(str.substring(4, -3));   // Java