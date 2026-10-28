let user = { name: 'sanjay', role: 'trainer', age: 55 };

console.log(user.name); // sanjay
console.log(user.role); // trainer

console.log(user.phone); // undefined
console.log(user.email); // undefined

// console.log(user.address.city); // Error
console.log(user?.address?.city); // undefined

console.log("Thank You!!!")

