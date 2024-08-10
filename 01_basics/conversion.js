let num = "33";
console.log(typeof num);


let numInNumber  = Number(num);
console.log(numInNumber);
console.log(typeof numInNumber);

// "33abc" => NaN => type->number
//"33" => 33
//null => 0
//true =>1
//false => 0
//undefined = NaN

let isLoggedIn = 0;
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)


// 1 = true
//0 = false
// "" = false
//"abc" = true