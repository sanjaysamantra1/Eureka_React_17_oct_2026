let cars = ['Tata', 'Honda', 'Toyota', 'Hyundai', 'Mahindra']
cars.sort()
console.log(cars);


let arr1 = [20, 50, 10, 30, 40];
arr1.sort();
console.log('Arr1: ', arr1);

let arr2 = [91, 5, 92, 81, 85, 101, 107, 105, 6, 7, 2, 95];
arr2.sort(); // string sort
console.log('Arr2: ', arr2);

let arr3 = [91, 5, 92, 81, 85, 101, 107, 105, 6, 7, 2, 95];
arr3.sort((a, b) => a - b);  // numeric sort - Asc
// arr3.sort((a, b) => b - a);  // numeric sort - Desc
console.log('Arr3: ', arr3);


let employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
];
// sort the employees by salary(Asc)
employees.sort((emp1, emp2) => emp1.salary - emp2.salary);
console.log(employees)