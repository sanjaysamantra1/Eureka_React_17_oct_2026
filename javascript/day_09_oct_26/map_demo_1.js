let arr = [10, 20, 30, 40, 50];

// increase each number by 5
let newArr = arr.map((ele) => ele + 5)
console.log(newArr)


let employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
];
let updatedEmployees = employees.map((emp) => {
    let salutation = emp.gender == 'male' ? 'Mr.' : 'MIss.';
    return {
        ...emp,  // Spread Operator (Copy of an object)
        name: `${salutation} ${emp.name}`
    }
})
console.log(employees)
console.log(updatedEmployees)