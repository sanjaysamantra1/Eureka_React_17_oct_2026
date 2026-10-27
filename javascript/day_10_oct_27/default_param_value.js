function add(a, b, c) {
    console.log(a + b + c); // a=10 b=20 c=undefined
}
add(10, 20);


function addition(a, b, c = 0) {  // c=0 default value
    console.log(a + b + c); 
}
addition(10, 20);      // a=10 b=20 c=0
addition(10, 20, 30);  // a=10 b=20 c=30