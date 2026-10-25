let cars = ['Tata', 'Honda'];
console.log('Before Push:', cars);  // ['Tata', 'Honda']

cars.push('Maruti', 'Hyundai');
console.log('After Push:', cars);  // ['Tata', 'Honda','Maruti','Hyundai']

cars.pop()
console.log('After pop:', cars);  // ['Tata', 'Honda','Maruti']

cars.unshift('Hyundai')
console.log('After unshift:', cars);  // ['Hyundai', 'Tata', 'Honda','Maruti']

cars.shift()
console.log('After shift:', cars);  // ['Tata', 'Honda','Maruti']

console.log('car at index-1: ', cars.at(1)); // Honda
console.log(cars.includes('Honda')); // true
console.log(cars.includes('Toyota')); // false

// splice(position, deleteCount, ...items)
let arr = [10, 20, 30, 40, 50]
arr.splice(1, 3, 25, 35);
console.log('arr: ', arr);

let numArr1 = [10, 20, 30, 40, 50]
let numArr2 = numArr1.toSpliced(1, 3, 25, 35);
console.log(numArr1, numArr2);