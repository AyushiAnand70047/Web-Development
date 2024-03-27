// system to calculate popcorn prices based on size
let size = "M";
if(size === 'XL'){
    console.log("price is Rs. 250");
}
else if (size === 'L'){
    console.log("Price is Rs. 200");
}
else if(size === 'M'){
    console.log("Price is Rs. 100");
}
else if(size == 'S'){
    console.log("Price is Rs. 50");
}
else{
    console.log("Invalid");
}

// a good string is a string that starts with letter 'a' & has length > 3. write a progran ti find is a string is good or not
let str = "ayushi";
if((str[0] == 'a')&&(str.length > 3)){
    console.log("good");
}
else{
    console.log("not good");
}

// Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7. (1 = Monday, 2 = Tuesday & so on)
let day = 4;
switch(day){
    case 1:
        console.log("Day is Monday");
        break;
    case 2:
        console.log("Day is Tuesday");
        break;
    case 3:
        console.log("Day is Wednesday");
        break;
    case 4:
        console.log("Day is Thursday");
        break;
    case 5:
        console.log("Day is Friday");
        break;
    case 6:
        console.log("Day is Saturday");
        break;
    case 7:
        console.log("Day is Sunday");
        break;
    default:
        console.log("Invalid day");
}