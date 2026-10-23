let str = 'This is Javascript Class. This is String class, This class is from Eureka';

// replace 'class' with 'session'
let res1 = str.replace('class', 'session');
console.log(res1);

let res2 = str.replaceAll('class', 'session');
console.log(res2);

let res3 = str.replace(/class/gi, 'session');
console.log(res3);