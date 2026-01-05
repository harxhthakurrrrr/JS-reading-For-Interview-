//// Function Constructors yeh hamko ek BluePrint PRovide karta hai MTLAB JAISE HAMRE PASS EK OBJECT HAI tO HAM KYA KARTE HAI HAMKO 
CHAIYE JO KEY VALUE HAM USE ME USE KAR RAHE HAI APNE OBJECT WHI KEY VALUE HAMKO APNE  DUSRE OBJECT ME CHAIYE AGAR MAANA LO HAMRE PAR OBJECT HAI OR SAME KEY VALUE CHAIYE TO HAM KYA KARTE HAIEK US OBJECT KA BLUEPRINT BAAN ALETE HAI Function Constructors
SE OR USKI KEY VALUE KO HAM DUSRE OBJECT ME USE KAR SAKHTE HAI 
ISME KYA PECHANA HOTE HAI ISME JO HAMRE FUNCTION KA JO NAAM HAI CAMELCASE ME HOTA HAI PHLE WORD JO HAO FUNCTION KA VO NORMAL FUNCTION SE ALAG HOTA HAIYEH
ISME PHLE WORD CAPITAL hOTA HAI 

Normal function camelCase hota hai, constructor PascalCase hota hai

Normal: getUser()

Constructor: User()
3️⃣ new keyword ke saath call hota hai
4️⃣ this keyword use hota hai properties set karne ke liye

function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Harsh", 22);/// U1 JO HAI EK OBJECT LITERLAS BAANA HAI OR YEH uSER kI kEY VALUE LE RAHA  HAI HAM  




// 🔹 Function Constructor (Blueprint)
function Person(fname, lname, contact) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;

  this.getName = function () {
    console.log(this.fname, this.lname);
  };

  this.getContact = function () {
    console.log(this.contact);
  };
}

// 🔹 Objects create karna
const person1 = new Person("Piyush", "Garg", "999999");
const person2 = new Person("John", "Doe", "888888");
const person3 = new Person("Jane", "Doe", "777777");

// 🔹 Dusre object se access
person1.getName();      // Piyush Garg
person1.getContact();   // 999999

person2.getName();      // John Doe
person2.getContact();   // 888888

person3.getName();      // Jane Doe
person3.getContact();   // 777777

// 🔹 Direct property access
console.log(person2.fname);   // John
console.log(person3.contact); // 777777

















//////
YEH hAI oLD METHOD bLUEpRINT ab jo eS6 ME CHALA HAI uSKI cLASSES

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
yEH cHATgpT kA HAI


**Harshu**, yeh **clean NOTES (copy-paste ready)** bana diye 👇
(Exam + interview friendly language me)

---

## 📘 Function Constructor (OLD OOPS Blueprint – JavaScript)

**Function Constructor** hame **Blueprint** provide karta hai.
Matlab agar hame **same key–value structure** wale multiple objects chahiye,
to hum **Function Constructor se ek blueprint** bana lete hain
aur us blueprint se **naye objects create** karte hain.

---

### 🔹 Kyun use hota hai?

* Same type ke objects banana
* Code repeat hone se bachana
* OOPS ka OLD method (ES6 se pehle)

---

### 🔍 Pehchaan (Identification Points)

1️⃣ Constructor function ka **naam Capital letter** se start hota hai
2️⃣ Normal function → **camelCase**
3️⃣ Constructor → **PascalCase**
4️⃣ `new` keyword ke saath call hota hai
5️⃣ Properties set karne ke liye **`this` keyword** use hota hai

```js
// Normal function
getUser()

// Constructor function
User()
```

---

### 🔹 Example (Basic)

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Harsh", 22);
```

👉 `u1` ek **object** hai
👉 Jo `User` constructor se **key–value le raha hai**

---

## 🔹 Full Example (Function Constructor)

```js
// Function Constructor (Blueprint)
function Person(fname, lname, contact) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;

  this.getName = function () {
    console.log(this.fname, this.lname);
  };

  this.getContact = function () {
    console.log(this.contact);
  };
}
```

---

### 🔹 Objects Create Karna

```js
const person1 = new Person("Piyush", "Garg", "999999");
const person2 = new Person("John", "Doe", "888888");
const person3 = new Person("Jane", "Doe", "777777");
```

---

### 🔹 Dusre Object se Access

```js
person1.getName();      // Piyush Garg
person1.getContact();   // 999999

person2.getName();      // John Doe
person2.getContact();   // 888888

person3.getName();      // Jane Doe
person3.getContact();   // 777777
```

---

### 🔹 Direct Property Access

```js
console.log(person2.fname);    // John
console.log(person3.contact); // 777777
```

---

## ⚠️ Important Point

* Har `new Person()` → **naya object**
* `this` → **current object** ko refer karta hai

---

## 🔄 Summary (One-Line)

> **Function Constructor ek OLD OOPS blueprint hai jo same structure ke multiple objects create karta hai.**

---

## 🆕 ES6 NOTE

👉 Yeh **OLD method blueprint** hai
👉 **ES6 me iska NEW version = `class`**

Agar chaho to next message me **same notes ES6 `class` ke liye** bana deta hoon 📘✅
