let num1 = 2;
let num2 = 5;
console.log("The sum of " + num1 + " & " + num2 +" is " + (num1+num2));
// Template Literals
console.log(`The sum of ${num1} & ${num2} is ${num1+num2}`);

// Airthmetic Operators
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// Unary Operator
let a = 10;
console.log(++a);
console.log(a++);
console.log(--a);
console.log(a--);

// Assignment Operator
a = 2;
a += 2;
console.log(a);

// Comparison Operator
console.log(num1 == num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 != num2);

console.log(5 == '5');
// strict comparison (comparing both type and value)
console.log(5 === '5');

// comparison for non numbers
console.log('&' < 'a'); // comparing unicode

// conditional statements
let color = "yellow";
if(color === "red"){
    console.log("stop!");
}
else if(color === "yellow"){
    console.log("slow down")
}
else if(color === "green"){
    console.log("go");
}
else{
    console.log("Invalid");
}

// Logical Operators (&& -> Logical AND, || -> Logical OR, ! -> Logical Not)
console.log(true && false);
console.log(true || false);
console.log((3+5 > 10) && (3 > 1));
console.log(!(5 < 3));

// truthy & falsy values
// falsy values => false, 0, -0, 0n (BigInt value), "" (empty string), null, undefined, NaN
// truthy values => everything else
if(NaN){
    console.log("It has true value");
}
else{
    console.log("It has false value");
}

// switch statement
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light");
}

// to print error & warning in console
console.error("this is error message")
console.warn("this is warning");
// alert & prompt
alert("Something is wrong");
let name = prompt("Enter your name");
alert("Hello "+ name);