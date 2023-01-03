
import { LinkedList, Node } from './LinkedList';
import { DoubleLinkedList, DoubleLLNode } from './DoubleLinkedList';

class School {
  name: string;
  students: LinkedList<Student>;
  staff: LinkedList<Staff>;
  teachers: LinkedList<Teacher>;

  constructor(name: string) {
    this.name = name;
    this.students = new LinkedList<Student>();
    this.staff = new LinkedList<Staff>();
    this.teachers = new LinkedList<Teacher>();
  }
}

class Student {
  id: number;
  name: string;
  grade: number;

  constructor(id: number, name: string, grade: number) {
    this.id = id;
    this.name = name;
    this.grade = grade;
  }

  getName() {
    return this.name;
  }

  getGrade() {
    return this.grade;
  }
}

class Staff {
    id: number;
    name: string;
    role: string;
  
    constructor(id: number, name: string, role: string) {
      this.id = id;
      this.name = name;
      this.role = role;
    }
  
    getName() {
      return this.name;
    }
  
    getRole() {
      return this.role;
    }
  }

class Teacher {
  id: number;
  name: string;
  subject: string;
  salary: number;

  constructor(id: number, name: string, subject: string, salary: number) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  getSubject() {
    return this.subject;
  }

  getSalary() {
    return this.salary;
  }
}
  
const school = new School('Springfield Elementary');

// Create some students
const student1 = new Student(1, 'Bart Simpson', 3);
const student2 = new Student(2, 'Lisa Simpson', 4);
const student3 = new Student(3, 'Maggie Simpson', 1);
const student4 = new Student(4, 'Milhouse Van Houten', 2);

// Add the students to the school's list of students
school.students.add(student1);
school.students.add(student2);
school.students.add(student3);
school.students.add(student4);

// Create some staff members
const staff1 = new Staff(1, 'Ned Flanders', 'janitor');
const staff2 = new Staff(2, 'Principal Skinner', 'principal');
const staff3 = new Staff(3, 'Superintendent Chalmers', 'superintendent');

// Add the staff members to the school's list of staff
school.staff.add(staff1);
school.staff.add(staff2);
school.staff.add(staff3);

// Create some teachers
const teacher1 = new Teacher(1, 'Mrs. Krabappel', 'math', 50000);
const teacher2 = new Teacher(2, 'Mr. Largo', 'music', 60000);
const teacher3 = new Teacher(3, 'Mr. Bergstrom', 'english', 60000);

// Add the teachers to the school's list of teachers
school.teachers.add(teacher1);
school.teachers.add(teacher2);
school.teachers.add(teacher3);

// Print the school name and list of students
console.log(`School Name: ${school.name}`);
console.log('Students:');
school.students.print(); // prints: Bart Simpson, Lisa Simpson, Maggie Simpson, Milhouse Van Houten

// Print the list of staff members
console.log('Staff:');
school.staff.print(); // prints: Ned Flanders, Principal Skinner, Superintendent Chalmers

// Print the list of teachers
console.log('Teachers:');
school.teachers.print(); // prints: Mrs. Krabappel, Mr. Largo, Mr. Bergstrom

// Print the number of particular students members
console.log(`Number of students: ${school.students.getData().length}`);

// Print the number of particular staff members
console.log(`Number of teachers: ${school.teachers.getData().length}`);

// Print the number of particular teacher members
console.log(`Number of stuffs: ${school.staff.getData().length}`);

// Check if school has specific teacher
const hasSpecificTeacher = school.teachers.findSpecificData((teacher) => teacher.id === 1);
if (hasSpecificTeacher) {
console.log('Teacher found'); // it will work
} else {
console.log('Teacher not found');
}

// Check if school has teacher with id 4
const hasTeacher4 = school.teachers.findSpecificData((teacher) => teacher.id === 4);
if (hasTeacher4) {
console.log('Teacher found');
} else {
console.log('Teacher not found'); // it will work
}


console.log('Student Data:');
school.students.getData().forEach((student) => console.log(student));

// Get the data for a particular staff member
console.log('Staff Data:');
school.staff.getData().forEach((staff) => console.log(staff));

// Get the data for a particular teacher
console.log('Teacher Data:');
school.teachers.getData().forEach((teacher) => console.log(teacher));