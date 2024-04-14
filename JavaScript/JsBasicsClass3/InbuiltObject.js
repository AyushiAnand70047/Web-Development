console.log(Math.random());
console.log(Math.random());

console.log(Math.PI);

console.log(Math.round(1.28));
console.log(Math.round(1.82));

console.log(Math.max(2,1,4,3));
console.log(Math.min(2,1,4,3));

console.log(Math.abs(2));
console.log(Math.abs(-2));

// string as primitive type
let lastName = " Anand";
console.log(typeof(lastName));
console.log(lastName.length);
console.log(lastName[1]);
console.log(lastName.includes("nan"));
console.log(lastName.startsWith("Ana"));
console.log(lastName.startsWith("Ayu"));
console.log(lastName.endsWith("nd"));
console.log(lastName.indexOf("n"));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.trim());
console.log(lastName.trimStart());
console.log(lastName.trimEnd());
console.log(lastName.replace('n','m'));

// string as object
let firstName = new String("Ayushi");
console.log(typeof(firstName));

let message = "This is my first message";
words = message.split(" ");
console.log(words);
console.log(message.replace("first","second"));
console.log(message);

// Escape Notation
let message1 = "This \"is\" \n my first message";
console.log(message1);

// Template Literal
let message2 = `This "is"
my first name ${firstName}`;
console.log(message2);

let date = new Date();
let date1 = new Date('June 20 1998  07:15');
let date2 = new Date(2004,11,17,1);

console.log(date);
console.log(date1);
console.log(date2);
date2.setFullYear(2002);
console.log(date2);