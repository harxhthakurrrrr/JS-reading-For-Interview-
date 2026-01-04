// // // // Array ek variable hota hai jisme ek se zyada values ek hi jagah, order me store hoti hain, aur unhe index (0 se) access karte hain.
// // // ///Array me koi bhi type ka data store ho sakta hai—number, string, boolean, object, array, hatta ki function bhi.
// // // let nums = [1, 2, 3];                 // numbers
// // // let names = ["Harshu", "Aman"];       // strings
// // // let mix = [1, "Hi", true];            // mixed
// // // let users = [{id:1}, {id:2}];         // objects
// // // let funcs = [() => {}, function(){}]; // function

filter

//  Typeof 
// // // jab be ham type of array karte hai hamre array object deta hai uska array ka naam 
// // // Jab aap JavaScript me typeof array par lagate ho, toh wo "object" hi return karta hai. Yeh isliye kyunki arrays JavaScript me objects hi hote hain, bas woh ek special tarah ke objects hote hain jo indexed hote hain.
// // Jab aap JavaScript me typeof array par lagate ho, toh wo "object" hi return karta hai. Yeh isliye kyunki arrays JavaScript me objects hi hote hain, bas woh ek special tarah ke objects hote hain jo indexed hote hain.
// /






// / // ///// Array Method:-


toString() : kise be array ko string me convert karne ke liye iska use hota hai 
let arr = [10, 20, 30];

let str = arr.toString();

console.log(str);      // "10,20,30"
console.log(typeof str); // "string"

push() aur pop(): end me element add ya remove karne ke liye.
..................shift and unshift()
yeh kya karna hai hamre shurur me data add or delelect karne ke kaam aata hai 
unshift() → start me add karne ke liye

shift() → start se remove karne ke liye
let arr = [2, 3, 4];
arr.unshift(1); // [1, 2, 3, 4]

let arr = [1, 2, 3, 4];
arr.shift(); // [2, 3, 4]
////////////////////////
 9  ................................................delete():-delete kya karta hai yeh thoda alag hai. delete keyword kisi array ke specific element ko remove to kar sakta hai, lekin wo us index ko empty ya undefined chhod deta hai. Matlab array ki length kam nahi hoti, bas wo jagah khali ho jaati hai.
Agar aapko array ka last element delete karna hai aur saath hi array ki length bhi kam karni hai, toh uske liye hum pop() method use karte hain.

🔹 Summary:

delete arr[index]: Sirf us index ka element hata dega, lekin array me ek empty slot chhod dega.
///
pop(): Last element ko remove karke array ki length bhi kam kar deta hai.
let arr = [1, 2, 3, 4];
delete arr[2]; // arr ab [1, 2, empty, 4] hoga, length wahi rahegi

arr.pop(); // yeh last element '4' remove kar dega, ab arr [1, 2, empty] ho jaayega

map(): har element par koi function apply karke naya array banane ke liye.
example :-
let numbers = [1, 2, 3, 4];

// Har number ka square naya array mein
let squaredNumbers = numbers.map((num) => {
  return num * num;
});

console.log(squaredNumbers);
output:-
[1, 4, 9, 16]













// reduce(): array ko ek single value me reduce karne ke liye. iske liye ek new file baana usme dekhna thoda htought hai samj aajayega 

.at.......................find(): pehla element jo condition match kare, usey dhoondne ke liye. 

...........................................includes(): check karne ke liye ki koi value array me hai ya nahi. boolene value value return karta hai true yha false kii 
push() aur pop(): end me element add ya remove karne ke liye.


map(): har element par koi function apply karke naya array banane ke liye.

filter(): condition ke basis par elements ko chhantne ke liye.




filter(): condition ke basis par elements ko chhantne ke liye. yeh condition ke bas us array ko dekhta hai or usme new array 
return karta hai 
filter array me se sirf wahi elements rakhta hai jo condition true karein

Ye naya array return karta hai

Original array change nahi hota

let numbers = [10, 25, 30, 15];

let bigNumbers = numbers.filter((num) => {
  return num > 20;
});

console.log(bigNumbers);
[25, 30]

///////////////////////
.at.............................................reduce(): array ko ek single value me reduce karne ke liye.
Reducer ek function hota hai jo previous result + current value ko combine karke ek naya result banata hai
Total / Sum nikalna

Average / Max / Min

Cart total (real project)

Array → Object / Grouping


let nums = [10, 20, 30];

let total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

One-line yaad:
//////////////////////////
....................find(): pehla element jo condition match kare, usey dhoondne ke liye.
 ===============================
Array Method: find()
===============================

.apply........................................find() kya karta hai?
// 👉 Array me se jo pehli value condition match karti hai
// 👉 wahi VALUE return karta hai

// Important points:
// 1️⃣ Sirf FIRST match check karta hai
// 2️⃣ Match milte hi aage check nahi karta
// 3️⃣ Agar koi match na mile → undefined return karta hai
// 4️⃣ Original array change nahi karta

// Example:
let arr = [10, 30, 20, 40];

let result = arr.find((value) => {
  return value > 25;
});

console.log(result);

// Output:
// 30

// Reason:
// 10 ❌
// 30 ✅ → pehla match, value return, yahin ruk gaya


/////////////////////////////
.apply..............................includes(): check karne ke liye ki koi value array me hai ya nahi. yeh kaam iske ota hai agar araary vo value hai yha nahi vo value btata hai bollene me kin  hogi totrue barna \
false retur karega inculde karta hai dhunda kin  vo elemet ki value us array me hai yha nahi 
let arr = [10, 20, 30];

console.log(arr.includes(20)); // true
console.log(arr.includes(50)); // false

///////////////////////////////////////////////// 

....................1123223............splice() 
yek kya karta hai orging array m se to delelet kar deta hai orgin ko be change kar deta jo hamre value delect hui hogi vo usme 
jo usse array m rahega ko new array return karta  hai 

array.splice(startIndex, deleteCount, newItem)
let arr = [1, 2, 4, 5];

// index 2 par 3 add karna
arr.splice(2, 0, 3);

console.log(arr); // [1, 2, 3, 4, 5]

2 → kis index par add karna

0 → kuch delete nahi karna

3 → naya data jo add hoga
///////////////////////////////////


......................... concat(): do ya usse zyada arrays ko jod kar naya array banana.
do yha do se jaada array ko ek sath jodne ke liye ham concat use karte hai 


let a1 = [1,2,3,3]
let a2 = [ 78,8,8,8]
let a3 = [9,8,1]

let result = a1.concat(a2,a3);
yeh kya karta hai hamre orginal wale array koi change nahi karta hai hamko nwe array 
deta hai bas us new array m array ka data same rahe bas 
consolelog(a1,a2,a3)/// yeh same rahege kyoki orgina wale me koi change karta haib 






// ===============================
// Array Method: findIndex()
// ===============================
findIndex() kya karta hai?
// 👉 Array me se jo pehla element condition true karta hai
// 👉 uska INDEX return karta hai
yeh yeh index ki  value dekhta hai or agar vo mil gayi to bo bha se val;ue de dega fir aage check nahi karta hai   

// Important points:
// 1️⃣ Sirf FIRST match dekhta hai
// 2️⃣ Match milte hi ruk jaata hai
// 3️⃣ Agar koi match na mile → -1 return karta hai
// 4️⃣ Original array me koi change nahi karta

// Example:
let arr = [10, 30, 20, 40];

let index = arr.findIndex((value) => {
  return value > 25;
});

console.log(index);

// Output:
// 1

// Reason:
// 10 ❌
// 30 ✅ → pehla match, index = 1 (yahin ruk gaya)

















////////////////////////////////////////////////
............indexOf(): kisi element ka index dhoondne ke liye. kis uska index no naam kya hai 
////////////////////////////

... join() array ke sabhi elements ko ek string me convert kar deta hai.

Aap decide kar sakte ho ki elements ke beech me kaun sa separator lagana hai.

separator wo character ya string hai jo har element ke beech me aata hai.

Jaise aap comma (,), space ( ), ya koi bhi word (jaise "harsh") use kar sakte ho.
let fruits = ["apple", "banana", "cherry"];
let result = fruits.join(" harsh ");



// result: "apple harsh banana harsh cherry"


// reverse(): array ko ulta kar dena.

// flat(): nested arrays ko ek hi level par le aana (2D ko 1D banana jaise)


sort().:'sort() method array ko ascending order me arrange kar deta hai (by default). Matlab agar aapke paas [2, 3, 1, 4] hai aur aap sort()laga doge, to wo[1, 2, 3, 4]` ban jayega.

Aur haan, sort() original array ko hi change kar deta hai, yani yeh mutable tarike se kaam karta hai. Isliye aapko original array ki koi copy chahiye ho to pehle se bana lena chahiye, kyunki sort() usse modify kar deta hai'

let arr = [3, 1, 4, 2];

arr.sort();

console.log(arr); 
// [1, 2, 3, 4]  ❗ original array change ho gaya



//////////////////////////////////////////////
slice() iska use hota hai hamre data ko   kisse me karne ke liye 
const sum  = [1,2,3,4,56]
indexvalue[0,1,2,3,4]
sum.slice(1)//2,3,4,56
sum.slice(1,3)///2,3

////////////////

............... reverse() kya hota hai?
   - Array ka order ulta (reverse) kar deta hai
   - Original array ko hi change karta hai (mutable)
*/

/* 🔹 Example */
let arr = [1, 2, 3, 4];

arr.reverse();

console.log(arr);
// [4, 3, 2, 1]  


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
FOrEach():-






// ////// example 
// // array-examples.js

// // 1. push() example
// let arr = [1, 2, 3];
// arr.push(4); // [1, 2, 3, 4]

// // 2. pop() example
// arr.pop(); // [1, 2, 3]

3. map() example
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






