var a = 10;
console.log(`Global scope a: ${a}`);  // global

function f1() {
    var b = 20;  // function
    console.log(`inside f1 a:${a} b:${b}`);
    // console.log(`c: ${c}`); // c is not defined
}
f1()

function f2() {
    var c = 30; // function
    console.log(`inside f2 a:${a} c:${c}`);
    // console.log(`b: ${b}`); // b is not defined
}
f2()