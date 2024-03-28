let msg = "help!";
console.log(msg.trim().toUpperCase());

let Name = "ApnaCollege";
console.log(Name.slice(4,9)); // 4 to 8,last index letter is not included
console.log(Name.indexOf("na"));
console.log(Name.replace("Apna","Our"));
console.log(Name.slice(4).replace("l","t")); // replace only first occurrence

let months = ['jan','july','march','august'];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

let month = ['january','july','march','august'];
month.splice(0,2,'july','june');
console.log(month);

let language = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(language.reverse().indexOf('javascript'));
console.log(language);

let ticTacToe = [['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(ticTacToe);
ticTacToe[0][1] = 'o';
console.log(ticTacToe);