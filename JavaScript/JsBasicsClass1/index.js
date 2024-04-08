// open terminal(node index.js)
console.log('Namste duniya');

// vaiable: Named memory location
let num = 5;

// Dynamic Typing
let Fname = "Ayushi";
console.log(Fname);
Fname = 3;
console.log(Fname);


// scope of let is inside that code block only but var is having global scope
// we can re-declare variable using var but can't re-declare using let
// we can't re-assign value to constant

const PI = 3.14;

// variable name cannot be a reserved keyword
//preferably name of variable should be meaningful
//use camelCase for variable name


// Objects
let person = {
    firstName: 'Ayushi',
    lastName: 'Anand',
    age: 21
}
// dot notation to access object key value
console.log(person.age);

// Arrays (contains list of items)
let names = ['Ayushi','Anand','Tauqueer'];
// using index we can access it
console.log(names[2]);

// Aithmetic Operator
let num1 = 3;
let num2 = 5;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num2%num1);
console.log(num2**num1); // num2 to the power num1

// pre increment (first increment the value then use)
// post increment (first use the value then increment it)

//Assigment Operator
let x = 5;
x += 5; // x = x + 5

// Comparison Operator (<,>,<=,>=,==,!=,===,!==)
// == (loose equality) check only value is same or not it does not check data type
console.log(3 == '3');
// === (strict equality) check bot alue and data type is equal or not
console.log(3 === '3');

// Ternary Opeartor
// condition ? val1 : val2;
let age = 15;
let status = (age >= 18) ? "I can vote" : "I can't vote";
console.log(status);

// logical operator (AND, OR, NOT)
console.log((age < 18)||(age != 15));
console.log((age < 18)&&(age != 15));
// falsey: undefined, null, 0, false, '', NaN
// boolean(falsey) || non Boolean -> non Boolean
console.log(false || 'Ayushi');

// Bitwise Operator (Bitwise AND, Bitwise OR)
// a = 2 (00000010), b = 3 (00000011) => a & b = (00000010) 2
console.log(2&3);

// Operator Precedence

// Control Statements
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Not Adult");
}

let marks = 90;

switch (true) {
    case marks > 90:
        console.log("A grade");
        break;
    case marks > 80 && marks <= 90:
        console.log("B grade");
        break;
    case marks > 50:
        console.log("C grade");
        break;
    default:
        console.log("E grade");
}

// loops: (For, while, do-while, infinite loop, for-in, for-of)
// use to do repetition of task
// (initialisation, condition, updation)
for(let i=2;i<=5;i++){
    console.log(i);
    //console.log("Ayushi");
}

let j = 2;
while(j <= 5){
    console.log(j);
    j++;
}

// do while loop excute atleast ones
let i = 2;
do{
    console.log(i);
    i++;
}
while(i <= 5);