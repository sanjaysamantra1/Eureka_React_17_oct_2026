// ES_6
class Student {
    constructor(roll, name, course, location) { 
        this.roll = roll;
        this.name = name;
        this.course = course;
        this.location = location;
    }
}
let std1 = new Student(101, 'Prashant', 'ReactJS', 'Virginia');
let std2 = new Student(102, 'Srujana', 'Angular', 'Kansas');

console.log(std1)
console.log(std2)