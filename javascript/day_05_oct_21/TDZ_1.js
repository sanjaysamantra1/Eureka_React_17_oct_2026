console.log(`a: ${a}`);  // undefined - Hoisting
console.log(`b: ${b}`);  // Cannot access 'b' before initialization - Temporal Dead zone
console.log(`c: ${c}`);  // Cannot access 'c' before initialization - temporal Dead Zone

var a = 10;
let b = 20;
const c = 30;

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
