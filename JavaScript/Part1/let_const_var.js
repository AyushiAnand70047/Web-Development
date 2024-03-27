let age = 20;
age = age + 1;
age += 1;
age++; // unary operator
console.log(age);

const pi = 3.14;
//pi = pi + 1; // error(const can't be change)
console.log(pi);
let r = 2;
let area = pi * r**2;
console.log(area);

// let age = 10; // error (can't redeclare if let keyword is use)
let year1 = 2000;
let newYear1 = ++year1;
console.log(year1+" "+newYear1);
let year2 = 1900;
let newYear2 = year2++;
console.log(year2+" "+newYear2);