let arr1 = [10, 20];
let arr2 = arr1;  // Reference Copy
// A new array array is not being created, the same array address is copied to another variable
// both arr1 & arr2 are holding the same reference of the array
arr1.push(30);
arr2.push(40);
console.log('Arr1: ', arr1); // [ 10, 20, 30, 40 ]
console.log('Arr2: ', arr2); // [ 10, 20, 30, 40 ]


let arr3 = [10, 20, [30, 31]]
let arr4 = [...arr3]; // spread operator - Shallow Copy
arr3.push(40, 50);
arr3[2].push(32, 33);
console.log('Arr3: ', arr3); // [ 10, 20, [ 30, 31,32,33 ], 40, 50]
console.log('Arr4: ', arr4); // [ 10, 20, [ 30, 31,32,33 ] ]


let arr5 = [10, 20, [30, 31]]
let arr6 = structuredClone(arr5); // Deep Copy
arr5.push(40, 50);
arr5[2].push(32, 33);
console.log('Arr5: ', arr5); // [ 10, 20, [ 30, 31,32,33 ], 40, 50]
console.log('Arr6: ', arr6); // [ 10, 20, [ 30, 31 ] ]