// ===============================
// ES6 CLASS (NEW OOPS BLUEPRINT)
// ===============================

// Class JavaScript me ek blueprint hoti hai.
// Blueprint ka matlab: same structure ke multiple objects banana.
// ES6 class, Function Constructor ka modern aur clean version hai.

// --------------------------------
// Class kyun use hoti hai
// --------------------------------
// 1. Same type ke objects create karne ke liye
// 2. Code ko readable aur maintainable banane ke liye
// 3. OOPS concepts ko easy tarike se implement karne ke liye

// --------------------------------
// Class ki Pehchaan (Identification)
// --------------------------------
// 1. 'class' keyword use hota hai
// 2. Class ka naam PascalCase me hota hai (first letter Capital)
// 3. constructor() method hota hai
// 4. new keyword ke saath object banta hai
// 5. this keyword current object ko refer karta hai
// 6. Methods prototype par hote hain (memory efficient)

// --------------------------------
// Basic Example
// --------------------------------
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const u1 = new User("Harsh", 22);
// u1 ek object hai jo User class ke blueprint se bana hai

// --------------------------------
// Full Example (Class)
// --------------------------------
class Person {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }

  getName() {
    console.log(this.fname, this.lname);
  }

  getContact() {
    console.log(this.contact);
  }
}

// --------------------------------
// Objects create karna
// --------------------------------
const person1 = new Person("Piyush", "Garg", "999999");
const person2 = new Person("John", "Doe", "888888");
const person3 = new Person("Jane", "Doe", "777777");

// --------------------------------
// Dusre object se access
// --------------------------------
person1.getName();     // Piyush Garg
person1.getContact();  // 999999

person2.getName();     // John Doe
person2.getContact();  // 888888

person3.getName();     // Jane Doe
person3.getContact();  // 777777

// --------------------------------
// Direct property access
// --------------------------------
console.log(person2.fname);    // John
console.log(person3.contact);  // 777777

// --------------------------------
// Summary
// --------------------------------
// ES6 Class ek NEW OOPS blueprint hai.
// Ye Function Constructor ka modern version hai.
// Isse same structure ke multiple objects create kiye jaate hain.
