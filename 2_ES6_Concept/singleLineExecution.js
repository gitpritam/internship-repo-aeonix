//string literal
let userName = "Pritam";

console.log(`Hello ${userName}`);
//Destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;

//Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

//Rest Parameter
const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(sum(1, 2, 3, 4, 5));

/*Nullish Coalescing Operator (??):
Returns the right-hand operand when the left-hand operand is null or undefined, 
but not for other falsy values.*/
// let userName = null;
// let userName;
const uName = userName ?? "Guest";
console.log(uName);
