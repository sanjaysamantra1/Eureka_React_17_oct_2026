let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];

console.log("==========1. For Loop===========")
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log("==========2. For in Loop===========")
for (let i in cars) {
    console.log(cars[i]);
}

console.log("==========3. For of Loop===========")
for (let car of cars) {
    console.log(car);
}

console.log("==========4. forEach()===========")
cars.forEach((val, ind, arr) => {
    console.log(val, ind, arr)
})