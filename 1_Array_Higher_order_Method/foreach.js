const people = [
  { name: "John", company: "ABC Corp", age: 30 },
  { name: "Emily", company: "XYZ Inc", age: 25 },
  { name: "Michael", company: "Tech Solutions", age: 35 },
  { name: "Sarah", company: "Software Co.", age: 28 },
  { name: "David", company: "Tech Innovations", age: 32 },
  { name: "Anna", company: "Data Systems", age: 29 },
  { name: "James", company: "Web Services", age: 31 },
  { name: "Emma", company: "Cloud Technologies", age: 27 },
  { name: "Daniel", company: "Mobile Solutions", age: 33 },
  { name: "Olivia", company: "Digital Creations", age: 26 },
];

people.forEach((item, index, items) => {
  console.log(`${index} : ${item.name} ${item.age} ${item.company} `);
  console.log(items);
});
