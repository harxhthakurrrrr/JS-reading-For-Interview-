// Mutable example (Array / Object)
let arr = [1, 2, 3];
let ref = arr;

ref.push(4);

console.log(arr); // [1, 2, 3, 4]  ❗ original bhi change
////////
let user = { name: "Harshu" };
user.name = "Aman";

console.log(user); // { name: "Aman" }


// Immutable example (String)
let name = "harshu";
let newName = name.toUpperCase();

console.log(name);     // "harshu"
console.log(newName);  // "HARSHU"
