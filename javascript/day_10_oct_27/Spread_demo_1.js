console.log(Math.max(10, 20, 30, 40));  // 40
console.log(Math.min(10, 20, 30, 40));  // 10

let arr = [10, 20, 30, 40];
console.log(Math.max(arr));  // NaN
console.log(Math.min(arr));  // NaN

console.log(Math.max(...arr));  // 40
console.log(Math.min(...arr));  // 10