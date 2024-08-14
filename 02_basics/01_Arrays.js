// Array is a datatype in javascript that allows you to store multiple values in a single variable
// Javascript arryas allows you to store values of different datatype
//shallow copies are the copies which holds the refernce of the original arrays
// deep copies are the copies which does not holds the refernce of the original array


let arr = [1,2,3,4,5];
// console.log(arr);
let arr1 = new Array('a', 'b', 'c');
// console.log(arr1);


// console.log(arr.push(34)); // it add 34 at the end of the array
// console.log(arr.pop()); // it removes last element of the array

// console.log(arr.indexOf(4)); // it return index of the element , if element exists otherwise -1.
// console.log(arr.unshift(90));
// console.log(arr.shift());


let myArr = arr.join();  // it returns string 
//console.log(myArr)
//console.log(typeof myArr)

// slice and splice
console.log("A" , arr)
let myn1 = arr.slice(1,3); // it does not manipulate the original array
console.log(myn1);
console.log("b", arr)
let myn2 = arr.splice(1,3); // it manipulates the original array
console.log(myn2);
console.log("c", arr)