///
string Method 

// =======================================
// STRING METHODS – DAILY USE (PROJECT)
// =======================================


// --------------------
// trim()
// --------------------
// Use: Form input clean (extra spaces remove)
// Use hota hai: username, email, search input
// Use nahi hota: beech ke spaces remove karne ke liye

let name = "  Aman  ";
name.trim(); // "Aman"


// --------------------
// toLowerCase() / toUpperCase()
// --------------------
// Use: Case normalize (login, email comparison)
// Use nahi hota: password store karte time

let email = "USER@GMAIL.COM";
email.toLowerCase(); // "user@gmail.com"


// --------------------
// includes()
// --------------------
// Use: Search / simple validation
// Return: true / false
// Use nahi hota: exact position chahiye ho

let tech = "JavaScript";
tech.includes("Script"); // true


// --------------------
// slice()
// --------------------
// Use: Substring nikalna
// Use hota hai: preview text, masking (card, phone)

let card = "123456789012";
card.slice(-4); // "9012"


// --------------------
// split()
// --------------------
// Use: String → Array
// Use hota hai: CSV data, tags, comma separated values

let tags = "js,react,node";
tags.split(","); // ["js","react","node"]


// --------------------
// replace() / replaceAll()
// --------------------
// Use: Text update / sanitize
// replace → first match
// replaceAll → all matches

let msg = "Hi Hi Hi";
msg.replace("Hi", "Hello");     // "Hello Hi Hi"
msg.replaceAll("Hi", "Hello");  // "Hello Hello Hello"


// --------------------
// length
// --------------------
// Use: Validation (min / max length)

let password = "12345";
password.length >= 8; // false


// =======================================
// FORMS / VALIDATION METHODS
// =======================================


// --------------------
// startsWith() / endsWith()
// --------------------
// Use: Prefix / suffix validation
// Use hota hai: email, URL, file extension

let mail = "user@gmail.com";
mail.startsWith("user");        // true
mail.endsWith("@gmail.com");    // true


// --------------------
// indexOf()
// --------------------
// Use: Position / existence
// Return: index OR -1
// Use nahi hota: sirf true/false chahiye ho

let word = "Frontend";
word.indexOf("end"); // 4
word.indexOf("xyz"); // -1


// --------------------
// match()
// --------------------
// Use: Regex validation (email, phone)
// Return: array OR null

let email2 = "test@gmail.com";
email2.match(/@gmail\.com/); // valid → array | invalid → null


// =======================================
// DISPLAY / FORMATTING
// =======================================


// --------------------
// padStart() / padEnd()
// --------------------
// Use: ID, OTP, timers, fixed-length format

let time = "5";
time.padStart(2, "0"); // "05"

let code = "JS";
code.padEnd(5, "*");   // "JS***"


// --------------------
// repeat()
// --------------------
// Use: UI helper, separators, loaders

"*".repeat(5);    // "*****"
"-".repeat(10);   // "----------"


// =======================================
// IMPORTANT NOTES
// =======================================

// ✔ String is IMMUTABLE
// ✔ All methods return NEW string
// ✔ Original string kabhi change nahi hoti
