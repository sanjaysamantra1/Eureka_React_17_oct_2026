let numArr = [10, 20, 30, 40, 50];

// find the sum of all the nums
let sum = numArr.reduce((prev, curr) => {
    console.log(`Prev: ${prev} Curr:${curr}`)
    return prev + curr;
}, 0);
console.log(`sum: ${sum}`)


// Reverse a string using reduce()
let str = 'SESSION';
let revStr = str.split('').reduce((prev, curr) => {
    console.log(`Prev: ${prev} Curr:${curr}`)
    return curr + prev;
}, '');
console.log(`Reverse of ${str} is: ${revStr}`)