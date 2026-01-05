// // // // Array ek variable hota hai jisme ek se zyada values ek hi jagah, order me store hoti hain, aur unhe index (0 se) access karte hain.
// // // ///Array me koi bhi type ka data store ho sakta hai—number, string, boolean, object, array, hatta ki function bhi.
// // // let nums = [1, 2, 3];                 // numbers
// // // let names = ["Harshu", "Aman"];       // strings
// // // let mix = [1, "Hi", true];            // mixed
// // // let users = [{id:1}, {id:2}];         // objects
// // // let funcs = [() => {}, function(){}]; // function



//  Typeof 
// // // jab be ham type of array karte hai hamre array object deta hai uska array ka naam 
// // // Jab aap JavaScript me typeof array par lagate ho, toh wo "object" hi return karta hai. Yeh isliye kyunki arrays JavaScript me objects hi hote hain, bas woh ek special tarah ke objects hote hain jo indexed hote hain.
// // Jab aap JavaScript me typeof array par lagate ho, toh wo "object" hi return karta hai. Yeh isliye kyunki arrays JavaScript me objects hi hote hain, bas woh ek special tarah ke objects hote hain jo indexed hote hain.
// /






// / // ///// Array Method:-


// push() aur pop(): end me element add ya remove karne ke liye.

// map(): har element par koi function apply karke naya array banane ke liye.

// filter(): condition ke basis par elements ko chhantne ke liye.

// reduce(): array ko ek single value me reduce karne ke liye.

// find(): pehla element jo condition match kare, usey dhoondne ke liye.

// includes(): check karne ke liye ki koi value array me hai ya nahi.
// push() aur pop(): end me element add ya remove karne ke liye.

// map(): har element par koi function apply karke naya array banane ke liye.

// filter(): condition ke basis par elements ko chhantne ke liye.

// reduce(): array ko ek single value me reduce karne ke liye.

// find(): pehla element jo condition match kare, usey dhoondne ke liye.

// includes(): check karne ke liye ki koi value array me hai ya nahi.
// concat(): do ya usse zyada arrays ko jod kar naya array banana.

// indexOf(): kisi element ka index dhoondne ke liye.

// join(): array ke elements ko ek string me jodna.

// reverse(): array ko ulta kar dena.

// flat(): nested arrays ko ek hi level par le aana (2D ko 1D banana jaise)





// ////// example 
// // array-examples.js

// // 1. push() example
// let arr = [1, 2, 3];
// arr.push(4); // [1, 2, 3, 4]

// // 2. pop() example
// arr.pop(); // [1, 2, 3]

// // 3. map() example
// let doubled = arr.map(num => num * 2); // [2, 4, 6]

// // 4. filter() example
// let evens = arr.filter(num => num % 2 === 0); // [2]

// // 5. reduce() example
// let sum = arr.reduce((acc, num) => acc + num, 0); // 6

// // 6. find() example
// let found = arr.find(num => num > 1); // 2

// // 7. includes() example
// let hasTwo = arr.includes(2); // true

// // 8. slice() example
// let part = arr.slice(0, 2); // [1, 2]

// // 9. splice() example
// let spliced = arr.splice(1, 1); // [2], arr becomes [1, 3]

// // 10. forEach() example
// arr.forEach(num => console.log(num)); // logs 1 and 3

// // 11. sort() example
// let unsorted = [3, 1, 2];
// unsorted.sort(); // [1, 2, 3]
