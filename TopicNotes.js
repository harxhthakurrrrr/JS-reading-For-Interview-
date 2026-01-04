/* =========================================================
   JAVASCRIPT A–Z NOTES (ONLY NOTES – EASY + INTERVIEW READY)
   By: Harshu
   ========================================================= */

/* =========================================================
1️⃣ JavaScript Kya Hai?
-----------------------------------------------------------
• JavaScript ek single-threaded, synchronous language hai
• Event Loop ki wajah se async kaam handle kar leti hai
• Browser + Server (Node.js) dono me chalti hai
========================================================= */

/* =========================================================
2️⃣ Variables (var / let / const)
-----------------------------------------------------------
var   -> function scoped, redeclare allowed (avoid)
let   -> block scoped, reassign allowed
const -> block scoped, reassign NOT allowed
========================================================= */

/* =========================================================
3️⃣ Data Types
-----------------------------------------------------------
Primitive (Pass by Value):
• Number, String, Boolean, undefined, null, Symbol, BigInt

Non-Primitive (Pass by Reference):
• Object, Array, Function
========================================================= */

/* =========================================================
4️⃣ Pass by Value vs Pass by Reference
-----------------------------------------------------------
Primitive → copy banti hai (original safe)
Non-Primitive → reference jata hai (original change hota)
========================================================= */

/* =========================================================
5️⃣ Scope
-----------------------------------------------------------
• Global Scope
• Function Scope
• Block Scope (let / const)
========================================================= */

/* =========================================================
6️⃣ Hoisting
-----------------------------------------------------------
• var -> hoisted with undefined
• let / const -> hoisted but TDZ me rehte
• function declaration fully hoisted
========================================================= */

/* =========================================================
7️⃣ Functions
-----------------------------------------------------------
• Function Declaration
• Function Expression
• Arrow Function
========================================================= */

/* =========================================================
8️⃣ Arrow Function
-----------------------------------------------------------
• this apna nahi hota
• parent scope se aata hai
• short syntax
========================================================= */

/* =========================================================
9️⃣ this Keyword
-----------------------------------------------------------
• Normal function → this depends on caller
• Arrow function → this from lexical scope
========================================================= */

/* =========================================================
🔟 Callback Function
-----------------------------------------------------------
• Function jo argument me pass hota hai
• Async JS ka base concept
========================================================= */

/* =========================================================
1️⃣1️⃣ Higher Order Function
-----------------------------------------------------------
• Jo function ko accept kare ya return kare
• map, filter, reduce examples
========================================================= */

/* =========================================================
1️⃣2️⃣ Closures
-----------------------------------------------------------
• Inner function outer function ke variables access karta
• Data privacy + counters me use hota
========================================================= */

/* =========================================================
1️⃣3️⃣ Currying
-----------------------------------------------------------
• Function jo ek-ek argument leta hai
• Closure ka advanced form
• Interview favorite
========================================================= */

/* =========================================================
1️⃣4️⃣ Loops
-----------------------------------------------------------
• for        → normal loop
• for...in  → object ke keys
• for...of  → iterable values (array, string)
========================================================= */

/* =========================================================
1️⃣5️⃣ Array Methods
-----------------------------------------------------------
• map     → transform
• filter  → condition
• reduce  → single value
• forEach → loop
========================================================= */

/* =========================================================
1️⃣6️⃣ Objects
-----------------------------------------------------------
• Key-value pair
• this keyword mostly object me use hota
========================================================= */

/* =========================================================
1️⃣7️⃣ Prototype
-----------------------------------------------------------
• JS me inheritance prototype se hota
• Har object ke paas prototype hota
========================================================= */

/* =========================================================
1️⃣8️⃣ Prototype Chain
-----------------------------------------------------------
• Object → Prototype → Prototype → null
• JS lookup yahin se karta
========================================================= */

/* =========================================================
1️⃣9️⃣ Constructor Function
-----------------------------------------------------------
• Object banane ka blueprint
• new keyword use hota
========================================================= */

/* =========================================================
2️⃣0️⃣ Synchronous vs Asynchronous
-----------------------------------------------------------
Sync  → line by line execution
Async → time lene wale kaam (API, setTimeout)
========================================================= */

/* =========================================================
2️⃣1️⃣ Event Loop (MOST IMPORTANT)
-----------------------------------------------------------
Flow:
1. Call Stack
2. Web APIs
3. Callback Queue (Macrotask)
4. Microtask Queue (Promise)
5. Event Loop

Rule:
• Microtask queue pehle execute hoti hai
========================================================= */

/* =========================================================
2️⃣2️⃣ Call Stack
-----------------------------------------------------------
• JS ka execution area
• LIFO (Last In First Out)
========================================================= */

/* =========================================================
2️⃣3️⃣ Web APIs
-----------------------------------------------------------
• setTimeout
• fetch
• DOM events
========================================================= */

/* =========================================================
2️⃣4️⃣ Callback Queue
-----------------------------------------------------------
• setTimeout, DOM callbacks
========================================================= */

/* =========================================================
2️⃣5️⃣ Microtask Queue
-----------------------------------------------------------
• Promises
• queueMicrotask
• Always higher priority
========================================================= */

/* =========================================================
2️⃣6️⃣ Promises
-----------------------------------------------------------
States:
• Pending
• Fulfilled
• Rejected
========================================================= */

/* =========================================================
2️⃣7️⃣ Promise APIs
-----------------------------------------------------------
• Promise.all       → all success else fail
• Promise.allSettled→ sab ka result
• Promise.race      → jo pehle aaye
• Promise.any       → pehla success
========================================================= */

/* =========================================================
2️⃣8️⃣ Async / Await
-----------------------------------------------------------
• Promise ka clean syntax
• try/catch ke sath use hota
========================================================= */

/* =========================================================
2️⃣9️⃣ try / catch
-----------------------------------------------------------
• Error handle karne ke liye
• Async + Sync dono me kaam karta
========================================================= */

/* =========================================================
3️⃣0️⃣ Fetch API
-----------------------------------------------------------
• API call karne ke liye
• Promise return karta
========================================================= */

/* =========================================================
3️⃣1️⃣ Debouncing
-----------------------------------------------------------
• Fast events control karta
• Search box example
========================================================= */

/* =========================================================
3️⃣2️⃣ Throttling
-----------------------------------------------------------
• Fixed interval me function call
• Scroll, resize events
========================================================= */

/* =========================================================
3️⃣3️⃣ setTimeout vs setInterval
-----------------------------------------------------------
• setTimeout → ek baar
• setInterval → bar-bar
========================================================= */

/* =========================================================
3️⃣4️⃣ DOM
-----------------------------------------------------------
• HTML ko JS se control karna
• querySelector, getElementById
========================================================= */

/* =========================================================
3️⃣5️⃣ ES6 Features
-----------------------------------------------------------
• let / const
• arrow function
• destructuring
• spread / rest
========================================================= */

/* =========================================================
3️⃣6️⃣ Destructuring
-----------------------------------------------------------
• Object / Array se direct value nikalna
========================================================= */

/* =========================================================
3️⃣7️⃣ Spread & Rest
-----------------------------------------------------------
• Spread → expand
• Rest   → collect
========================================================= */

/* =========================================================
3️⃣8️⃣ Shallow vs Deep Copy
-----------------------------------------------------------
• Shallow → reference copy
• Deep → actual copy
========================================================= */

/* =========================================================
3️⃣9️⃣ Interview One-Liners
-----------------------------------------------------------
• JS single-threaded hai
• Event loop async handle karta
• Promise microtask queue me jata
• Arrow function ka this nahi hota
========================================================= */

/* =========================================================
✅ END OF JAVASCRIPT NOTES (A–Z)
========================================================= */
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
