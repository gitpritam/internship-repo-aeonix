/*
#name -> private
static properties or method can access without creating object
get set -> getter and setter to convert a method to properties
*/

class User {
  static surname = "abc";
  #name;
  constructor(name) {
    this.#name = name;
  }

  get getName() {
    return this.#name;
  }
  set getName(newName) {
    this.#name = newName;
  }
}
const user1 = new User("Pritam");
// console.log(user1.#name);
console.log(user1.getName);
console.log(User.surname);

class Animal extends User {
  constructor(name) {
    super(name);
  }
}

const user2 = new Animal("Hanuman");

console.log(user2.getName);
