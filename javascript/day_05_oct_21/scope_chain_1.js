var a = 10;
let b = 20;
const c = 30;
console.log(`Global Scope a: ${a}`);
console.log(`Global Scope b: ${b}`);
console.log(`Global Scope c: ${c}`);

function f1() {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(`Function Scope a: ${a}`);
    console.log(`Function Scope b: ${b}`);
    console.log(`Function Scope c: ${c}`);

    if (true) {
        // var a = 1000;
        // let b = 2000;
        // const c = 3000;
        console.log(`Block Scope a: ${a}`);
        console.log(`Block Scope b: ${b}`);
        console.log(`Block Scope c: ${c}`);
    }
}
f1()