// There are two types of datatypes in javascript on the basis of memory 
//1. primitive datastypes  2. non- primitive datatype or reference datatype

// primitive datatypes : The varibales of these datatypes stores in stack memory.Here variables are passed as call by value.
// Non-primitive datatypes : The variables of these datatypes stores in heap memory . Here variables are passed as call by reference

// There are 7 primitive datatypes in javascript

// number
//BigInt
//string
//Boolean
//symbol
//null
// undefined

// there are 3 non primitive daratypes
// Arrays 
// objects
// functions


let arr = ["one", "two" ,"three"];
console.log(arr);
let myObj = {
   1: "one",
   2:"two"
};
console.log(myObj);

let myFun = function(){
    console.log("First function");
}
myFun();