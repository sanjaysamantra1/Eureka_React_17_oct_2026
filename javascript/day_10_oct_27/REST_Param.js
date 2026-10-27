// Write a function that can add any # of arguments

function add(...arr) {
    let sum = arr.reduce((prev, curr) => prev + curr);
    console.log(`Sum: ${sum}`);
}
add(10, 20)
add(10, 20, 30)
add(10, 20, 30, 40)
add(10, 20, 30, 40, 50)
