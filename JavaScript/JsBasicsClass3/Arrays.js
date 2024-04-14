// Creation
let numbers = [1,4,5,7];
console.log(numbers);

// Adding new element
// insert in last
numbers.push(9);
console.log(numbers);
// insert in begning
numbers.unshift(3);
console.log(numbers);
// insert in middle
numbers.splice(2,0,'a','b','c');
console.log(numbers);

// Finding Elements
console.log(numbers.indexOf(4));
// 2 is the position from which searching will start
console.log(numbers.indexOf(4,2));
// 6 is the position from which searching will start
console.log(numbers.indexOf(4,6));
console.log(numbers.indexOf(8));
console.log(numbers[0]);
console.log(numbers[2]);

// check element is present in array or not
if(numbers.indexOf(10) != -1){
    console.log("present");
}
else{
    console.log("not present");
}

// good way to check element is present in array
if(numbers.includes(10) == true){
    console.log("present");
}
else{
    console.log("not present");
}

// Removing Elements
// Spliting Elements
// Combining Elements

let names = [
    {number: 1, name: 'Ayushi'},
    {number: 2, name: 'Anand'}
];
console.log(names);

// we can't use arrays method like indexOf or includes on Array of object
// we will use callback functions
