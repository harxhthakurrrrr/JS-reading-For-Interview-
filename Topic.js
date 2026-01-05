/* =====================================================
   JAVASCRIPT A–Z NOTES (for Learning + Interview)
   Author: Harshu
   ===================================================== */

/* =========================
   1. Variables
   ========================= */
// var -> function scoped (avoid)
// let -> block scoped (use)
// const -> block scoped, value change nahi hoti

var a = 10;
let b = 20;
const c = 30;

/* =========================
   2. Data Types
   ========================= */
// Primitive (Pass by Value)
let num = 10;
let str = "Hello";
let bool = true;
let und = undefined;
let nul = null;

// Non-Primitive (Pass by Reference)
let arr = [1, 2, 3];
let obj = { name: "Harshu" };

/* =========================
   3. Pass by Value vs Reference
   ========================= */
let x = 5;
let y = x;
y = 10; // x change nahi hoga

let obj1 = { age: 20 };
let obj2 = obj1;
obj2.age = 25; // obj1 bhi change ho jayega

/* =========================
   4. Functions
   ========================= */
function normalFunc(a, b) {
  return a + b;
}

const arrowFunc = (a, b) => a + b;

/* =========================
   5. Callback Function
   ========================= */
function greet(name, callback) {
  callback(name);
}

greet("Harshu", function (n) {
  console.log("Hello " + n);
});

/* =========================
   6. Higher Order Function
   ========================= */
// Jo function accept kare ya return kare function
function higher(fn) {
  fn();
}

/* =========================
   7. Closures
   ========================= */
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

/* =========================
   8. Currying
   ========================= */
function add(a) {
  return function (b) {
    return a + b;
  };
}
add(2)(3); // 5

// Arrow curry
const sum =
  a => b => c => d => e => f => g => h => i => j =>
    a+b+c+d+e+f+g+h+i+j;

/* =========================
   9. Loops
   ========================= */
for (let i = 0; i < 3; i++) {}

let objLoop = { a: 1, b: 2 };
for (let key in objLoop) {}

let arrLoop = [1, 2, 3];
for (let val of arrLoop) {}

/* =========================
   10. Array Methods
   ========================= */
let nums = [1, 2, 3, 4];

nums.map(n => n * 2);
nums.filter(n => n > 2);
nums.reduce((acc, n) => acc + n, 0);

/* =========================
   11. Objects
   ========================= */
let user = {
  name: "Harshu",
  age: 22,
  greet() {
    console.log(this.name);
  }
};

/* =========================
   12. this keyword
   ========================= */
// Normal function -> this depends on caller
// Arrow function -> this comes from parent scope

/* =========================
   13. Prototype & Prototype Chain
   ========================= */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + " makes noise");
};

const dog = new Animal("Dog");

/* =========================
   14. Constructor
   ========================= */
// Constructor ek special function hota hai jo object banata hai
function Person(name) {
  this.name = name;
}
const p1 = new Person("Harshu");

/* =========================
   15. Synchronous vs Asynchronous
   ========================= */
console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");

/* =========================
   16. Event Loop
   ========================= */
/*
Call Stack -> Web API -> Callback Queue
Microtask Queue (Promise) > Macrotask Queue (setTimeout)
*/

/* =========================
   17. Promises
   ========================= */
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then(res => console.log(res)).catch(err => console.log(err));

/* =========================
   18. Promise APIs
   ========================= */
Promise.all([]);
Promise.allSettled([]);
Promise.race([]);
Promise.any([]);

/* =========================
   19. Async / Await
   ========================= */
async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

/* =========================
   20. try / catch
   ========================= */
try {
  throw new Error("Error");
} catch (e) {
  console.log(e.message);
}

/* =========================
   21. Hoisting
   ========================= */
// var hoisted (undefined)
// let & const hoisted but TDZ

/* =========================
   22. Scope
   ========================= */
// Global, Function, Block

/* =========================
   23. DOM (Basic)
   ========================= */
document.getElementById("id");
document.querySelector(".class");

/* =========================
   24. Debouncing
   ========================= */
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

/* =========================
   25. Throttling
   ========================= */
function throttle(fn, limit) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => flag = true, limit);
    }
  };
}

/* =========================
   END OF JS NOTES
   ========================= */
