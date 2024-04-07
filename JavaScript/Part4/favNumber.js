let number = 5;
let guess = prompt("guess the number");
while((guess != number)&&(guess != 'q')){
    guess = prompt("wrong guess");
}
if(guess == number){
    console.log()
}