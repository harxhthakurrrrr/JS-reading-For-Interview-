/* =========================================================
   JAVASCRIPT A–Z NOTES (CLEAN & INTERVIEW READY)
   Author: Harshu
   ========================================================= */

/* =========================
1️⃣ JavaScript Basics
========================= */
// JavaScript single-threaded hai
// Event Loop async kaam handle karta
// Browser + Node.js dono me chalti hai

/* =========================
2️⃣ Variables
========================= */
// var   -> function scoped (avoid)
// let   -> block scoped
// const -> block scoped (reassign nahi)

var a = 10;
let b = 20;
const c = 30;

/* =========================
3️⃣ Data Types
========================= */
// Primitive (Pass by Value)
let num = 10;
let str = "Hello";
let isTrue = true;
let und = undefined;
let nul = null;

// Non-Primitive (Pass by Reference)
let arr = [1, 2, 3];
let obj = { name: "Harshu" };

/* =========================
4️⃣ Pass by Value vs Reference
========================= */
let x = 5;
let y = x;
y = 10; // x change nahi hoga

let obj1 = { age: 20 };
let obj2 = obj1;
obj2.age = 25; // obj1 bhi change ho gaya

/* =========================
5️⃣ Scope
========================= */
// Global, Function, Block scope

/* =========================
6️⃣ Hoisting
========================= */
// var -> hoisted with undefined
// let/const -> hoisted but TDZ
// function declaration fully hoisted

/* =========================
7️⃣ Functions
========================= */
function normalFunc(a, b) {
  return a + b;
}

const arrowFunc = (a, b) => a + b;

/* =========================
8️⃣ this Keyword
========================= */
// Normal function -> caller par depend
// Arrow function -> lexical scope se

/* =========================
9️⃣ Callback Function
========================= */
function greet(name, cb) {
  cb(name);
}
greet("Harshu", n => console.log("Hello " + n));

/* =========================
🔟 Higher Order Function
========================= */
// Jo function ko accept/return kare
[1,2,3].map(n => n * 2);

/* =========================
1️⃣1️⃣ Closures
========================= */
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

/* =========================
1️⃣2️⃣ Currying
========================= */
function add(a) {
  return function (b) {
    return a + b;
  };
}
add(2)(3);

/* =========================
1️⃣3️⃣ Loops
========================= */
for (let i = 0; i < 3; i++) {}

for (let key in { a: 1, b: 2 }) {}

for (let val of [1, 2, 3]) {}

/* =========================
1️⃣4️⃣ Array Methods
========================= */
let nums = [1, 2, 3, 4];
nums.map(n => n * 2);
nums.filter(n => n > 2);
nums.reduce((acc, n) => acc + n, 0);

/* =========================
1️⃣5️⃣ Objects
========================= */
let user = {
  name: "Harshu",
  greet() {
    console.log(this.name);
  }
};

/* =========================
1️⃣6️⃣ Prototype & Inheritance
========================= */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + " makes noise");
};

const dog = new Animal("Dog");

/* =========================
1️⃣7️⃣ Constructor
========================= */
function Person(name) {
  this.name = name;
}
const p1 = new Person("Harshu");

/* =========================
1️⃣8️⃣ Sync vs Async
========================= */
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");

/* =========================
1️⃣9️⃣ Event Loop
========================= */
// Call Stack
// Web APIs
// Microtask Queue (Promise) -> HIGH priority
// Callback Queue (setTimeout)

/* =========================
2️⃣0️⃣ Promises
========================= */
const promise = new Promise((res, rej) => res("Success"));
promise.then(console.log);

/* =========================
2️⃣1️⃣ Promise APIs
========================= */
Promise.all([]);
Promise.allSettled([]);
Promise.race([]);
Promise.any([]);

/* =========================
2️⃣2️⃣ Async / Await
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
2️⃣3️⃣ Debouncing
========================= */
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

/* =========================
2️⃣4️⃣ Throttling
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
✅ END OF CLEAN JS NOTES
========================= */
