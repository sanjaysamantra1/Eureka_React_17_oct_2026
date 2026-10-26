let str = 'ENTERTAINMENT';

// Display Character Occurance:: {E:3 , N:2 , T:3 , R:1 ....}

let result = str.split('').reduce((obj, char) => {
    if (obj[char]) {
        obj[char] = obj[char] + 1;
    } else {
        obj[char] = 1;
    }
    return obj;
}, {});

console.log(result)