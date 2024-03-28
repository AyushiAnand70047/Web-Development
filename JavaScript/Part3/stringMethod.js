// string are immutable
let Name = "rohit";
Name[0] = 'm';
console.log(Name);

// str.trim() -> to remove additional white space (space before and after string)
let msg = "    Hel  lo    ";
console.log(msg);
console.log(msg.trim());

// str.toUpperCase() -> to change all letters of string into uppercase
// str.toLowerCase() -> to change all letters of string into lowercase
let str = "Hello World";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// str.indexOf("subString") -> to find first index of any substring
let myName = "Ayushi Anand";
console.log(myName.indexOf("yush"));
console.log(myName.indexOf("z"));

// Method chaining (apply multiple method on single string)
// str.trim().toUpperCase();
let myMsg = "   Hello Ayushi ";
console.log(myMsg.trim().toUpperCase());

// str.slice(si,ei) -> return a part of original string as a new string
let string = "I Love Coding";
console.log(string.slice(5));
console.log(string.slice(5,10));
console.log(string.slice(-5));  // -5 = length - 5
console.log(string.slice(string.length-5));

// str.replace("oldSubString","newSubString") -> replace only first substing,searches a value & returns a new string with the replaced value
console.log(string);
console.log(string.replace("Love","Like"));

// str.repeat(num) -> returns a string with the number of copies of string
let fruit = "Mango ";
console.log(fruit.repeat(3));