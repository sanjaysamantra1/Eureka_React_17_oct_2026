// 1. Function Declaration
add(2, 3); // hoisting
function add(a, b) {
    console.log(`Addition of ${a} & ${b} is ${a + b}`);
}
add(10, 20)

// 2. Function Expression
// sub(20, 10);
let sub = function (a, b) {
    console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
}
sub(20, 10);


// 3. Arrow Function    ES_6    2015
let mul = (a, b) => {
    console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
}
mul(20, 10);
