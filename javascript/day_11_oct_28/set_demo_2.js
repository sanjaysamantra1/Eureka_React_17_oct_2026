let arr = [10, 10, 50, 10, 50, 10, 10, 20, 30];
// remove the duplicates

let uniqueSet = new Set(arr);
console.log('uniqueSet: ', uniqueSet);

let uniqueArr = [...uniqueSet];
console.log('uniqueArr: ', uniqueArr);
