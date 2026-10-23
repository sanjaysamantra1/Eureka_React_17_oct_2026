let str = 'ENTERTAINMENT';

// find the first non repeated char
for(char of str){
    if(str.indexOf(char) == str.lastIndexOf(char)){
        console.log('Non Repeated Char: ', char);
        break;
    }
}