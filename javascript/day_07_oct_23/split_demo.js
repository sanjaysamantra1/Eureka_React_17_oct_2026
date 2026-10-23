let str = 'This is Javascript Training';

console.log(str.split(' ')); // ['This', 'is', 'Javascript', 'Training' ]
console.log(str.split('')); // ['T', 'h', 'i', 's',.....]
console.log(str.split('This')); // ['', ' is Javascript Training' ]
console.log(str.split('Training')); // ['This is Javascript ', '' ]
console.log(str.split('Java')); // ['This is ', 'script Training']