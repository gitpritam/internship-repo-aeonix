const people = [
  { name: "John", company: "ABC Corp", age: 30, salary: 50000 },
  { name: "Emily", company: "XYZ Inc", age: 25, salary: 60000 },
  { name: "Michael", company: "Tech Solutions", age: 35, salary: 75000 },
  { name: "Sarah", company: "Software Co.", age: 28, salary: 55000 },
  { name: "David", company: "Tech Innovations", age: 32, salary: 70000 },
  { name: "Anna", company: "Data Systems", age: 29, salary: 58000 },
  { name: "James", company: "Web Services", age: 31, salary: 68000 },
  { name: "Emma", company: "Cloud Technologies", age: 27, salary: 63000 },
  { name: "Daniel", company: "Mobile Solutions", age: 33, salary: 72000 },
  { name: "Olivia", company: "Digital Creations", age: 26, salary: 59000 },
];

// return salary with multiply
const newSalaryList = people.map((item) => {
  return item.salary * 2;
});

console.log(newSalaryList);

const newList = people.map((i) => {
  return { name: i.name, salary: i.salary };
});

console.log(newList);
