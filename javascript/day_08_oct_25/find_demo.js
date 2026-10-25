let employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
];

// 1. Display the first female Employee
let first_female_emp = employees.find((emp) => emp.gender == 'female');
console.log('first_female_emp: ', first_female_emp)