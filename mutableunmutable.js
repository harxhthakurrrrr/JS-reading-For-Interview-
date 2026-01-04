/* ===============================
   MUTABLE vs IMMUTABLE (NOTES)
   =============================== */

/* 🔹 Mutable kya hota hai?
   - Jis data ko direct change kar sakte hain
   - Change karne par original data bhi change ho jata hai
   - JavaScript me: Array, Object
*/

// Mutable example (Array)
let arr = [1, 2, 3];
arr.push(4);
// arr => [1, 2, 3, 4]  (original change ho gaya)

// Mutable example (Object)
let user = { name: "Harshu" };
user.name = "Aman";
// user => { name: "Aman" }


/* 🔹 Immutable kya hota hai?
   - Jis data ko direct change nahi kar sakte
   - Change karne par naya data banta hai, original same rehta hai
   - JavaScript me: String, Number, Boolean
*/

// Immutable example (String)
let str = "harshu";
let newStr = str.toUpperCase();
// str    => "harshu"   (same)
// newStr => "HARSHU"   (new string)


/* 🔹 Short yaad rakhne wali line:
   Mutable   → change possible (array, object)
   Immutable → naya banta hai (string)
*/
