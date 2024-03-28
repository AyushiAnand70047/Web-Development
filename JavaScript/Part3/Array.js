// let student1 = "Ayushi";
// let student2 = "Anand";
// let student3 = "Tauqueer";

// Array(Data Structure) -> Linear collection of things
let students = ["Ayushi","Anand","Tauqueer"];
console.log(students);
console.log(students.length);
console.log(students[0]);
console.log(students[2]);
console.log(students[3]);
console.log(typeof students);

// mixed array
let info = ["Ayushi",20,7.9];
console.log(info);
console.log(info[0][1]); // 0th index string then its 1st index character

// creating empty array
let empArr = [];

// arrays are mutable
let fruits = ["mango","apple","litchi"];
fruits[0] = "banana";
fruits[7] = "grapes";
console.log(fruits);
console.log(fruits.length);

// Array Methods
let names = ["Ayushi","Sweksha","Palak","Riya"];
console.log(names);
// arr.push(item) -> add to end of the array
console.log(names.push("Anand")); // return length
console.log(names);
// arr.pop() -> delete from end & returns it
console.log(names.pop());
console.log(names);
// arr.unshift(item) -> add to start
console.log(names.unshift("Anand")); // return length
console.log(names);
// arr.shift() -> delete from start & return it
console.log(names.shift());
console.log(names);

let marks = [99,89,67,42,100];
// arr.indexOf(item) -> return index if found else -1
console.log(marks.indexOf(89));
console.log(marks.indexOf(88));
// arr.includes(item) -> return true if found else false
console.log(marks.includes(89));
console.log(marks.includes(88));

let firstArr = ["red","yellow","blue"];
let secondArr = ["orange","green","voilet"];
// firstArr.concat(secondArr) -> merge 2 arrays
let newArr = firstArr.concat(secondArr);
console.log(newArr);
console.log(firstArr);
console.log(secondArr);
// firstArr.reverse() -> reverse an array, original array gets reversed
firstArr.reverse();
console.log(firstArr);

// arr.slice(si,ei) -> copies a portion of an array, ending index not included
let colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,4));
console.log(colors.slice(-2));

// splice -> removes/replace/add elements in place in original array
// splice(start,deleteCount,item0...itemN)
console.log(colors);
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);

// arr.sort() -> arranging elements in ascending order
let days = ["sunday","monday","wednesday","tuesday"];
days.sort();
console.log(days);
let squares = [25,16,4,49,36,9];
squares.sort(); // convert number into string then gets sorted so output is not same as expected
console.log(squares);

// Array Refrences -> address in memory
console.log([1] == [1]);
console.log([1] === [1]); // false because address is not same (=== is comparing address value of both the array)
console.log("name" == "name");
console.log("name" === "name");
let arr = [1,2];
let arrCopy = arr;
console.log(arr == arrCopy);
console.log(arr === arrCopy);

// constant arrays (address is same, we can't assign new array or another array)
const array = [1,2,3];
array.push(4);
console.log(array);
// we can add or remove value in array but we can't assign it new value to constant array
//array = [1,2]; 

// nested arrays (multi dimensional array)
let nums = [[2,4],[3,6],[4,8]];
console.log(nums.length);
console.log(nums[0].length);
console.log(nums[0][1]); // 0th index array -> 1st index element
