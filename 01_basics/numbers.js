const num1 = 123;
const num2 = Number(123);
//console.log(num1);
//console.log(num2);

const num3 = new Number(12);
//console.log(num3);


// random() operator : this function gives random number between 0 and 1

let randomNumber =(( Math.random() * 10) + 1);
//console.log(randomNumber)

// now max and min value is given to you then print random number
min = 10;
max=20;

let n1 =( Math.round(((Math.random() * (max-min)) + min)));
let n2 =( Math.ceil(((Math.random() * (max-min)) + min)));
let n3 =( Math.floor(((Math.random() * (max-min)) + min)));
console.log(n1)
console.log(n2);
console.log(n3);
console.log(n1.toFixed(2));
console.log(n1.valueOf());

const n4 = 10000000000;
console.log(n4.toLocaleString('en-IN'))