let value = 100;
function test1() {
    console.log(value); // 100  
    value = 200;
    console.log(value); // 200
}
test1();

function test2() {
    console.log(value); // Error : Temporal dead zone  
    let value = 200;
    console.log(value); 
}
test1();