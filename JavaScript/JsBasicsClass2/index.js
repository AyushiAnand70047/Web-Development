console.log("Lets start");

// object create
let rectangleOb1 = {
    length: 5,
    breadth: 3,
    draw: function(){
        console.log("drawing rectangle");
    }

}

let rectangleOb2 = {
    length: 2,
    breadth: 1,
    draw: function(){
        console.log("drawing rectangle");
    }

}


// factory function
function createRectangle(l,b){
    return rectangle = {
        length: l,
        breadth: b,
        draw: function(){
            console.log("drawing rectangle");
        }
    }
}

let rectangleObj1 = createRectangle(5,3);
let rectangleObj2 = createRectangle(2,1);


// constructor function -> Pascal Notation
function Rectangle(l,b){
    this.length = l,
    this.breadth = b,
    this.draw = function(){
        console.log("drawing rectangle");
    }
}

let rectangleObject1 = new Rectangle(5,3);
let rectangleObject2 = new Rectangle(2,1);

// Dynamic nature of object
let rectangleObject3 = new Rectangle(3,4);
console.log(rectangleObject3);
rectangleObject3.color = 'yellow';
console.log(rectangleObject3);
delete rectangleObject3.color;
console.log(rectangleObject3);

// Primitive (Pass by value)
let c = 10;
function increment(c){
    c++;
}
// when we pass primitive inside a funcion copied of that is passed not refrence so actual value will not change
increment(c);
console.log(c); // still value of c is 10

let a = 10;
let b = a;
a++;
console.log(`a = ${a}, b = ${b}`); // a = 11, b = 10

// Refrence (Pass by reference)
let C = {value: 10};
function increment(C){
    C.value++;
}
increment(C);
console.log(C.value); // here value of C is 11

let A = {value: 10};
let B = A;
A.value++;
console.log(`A = ${A.value}, B = ${B.value}`); // a = 11, b = 11

// Iterating through object
let rect = {
    length: 2,
    breadth: 4
}
// for-in-loop
for(let key in rect){
    // keys are reflected through key variable
    // values are reflected through rectangle[key]
    console.log(key,rect[key]);
}
// for-of-loop on object give error
// for(let key of rect){
//     console.log(key,rect[key]);
// }
// change object to arrays then it will work
for(let key of Object.keys(rect)){
    console.log(key,rect[key]);
}

// to check any properties exist in object or not
if('length' in rect){
    console.log('length Present');
}
else{
    console.log('length not Present');
}
if('color' in rect){
    console.log('color Present');
}
else{
    console.log('color not Present');
}

// Object Cloning
let src = {
    value1: 10,
    value2: 5
};
let src1 = {
    value: 15,
    value3: 20
}

// iteration
let dest = {};
for(let key in src){
    dest[key] = src[key];
}

// assign
let dest1 = Object.assign({},src);
// using assign we can copy multiple object inside one
let dest3 = Object.assign({},src,src1);

// spread
let dest2 = {...src};

src.value1 = 11;
console.log(src.value1); // 11
console.log(dest.value1); // 10
console.log(dest1.value1); // 10
console.log(dest2.value1); // 10