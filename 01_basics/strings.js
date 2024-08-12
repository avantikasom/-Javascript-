// strings can be created in javascript by using two ways: i.e, primitive strings and object strings.

// primitive strings:
let string1 = "This is the first string";
let string2 = 'This is the second string';

// printing the strings :
console.log(string1);
console.log(`String 1 : ${string1} \nString 2 : ${string2}` );
console.log(string1.charAt(1))

 
// Object strings: Object strings are made using String() constructor
let objstr1 = new String("Object string");
console.log(objstr1);


//string functions
//toLowerCase(), toUppercase(), subString(start index, end index), slice(start index, lower index, ), toString(), fontsize(size) , italics()
//console.table([objstr1.toLowerCase(), string1.toUpperCase(), objstr1.substring(1,5), objstr1.slice(3,5), string1.toString(), string1.fontsize(10)]);

//console.table([objstr1.substring(-8,4), objstr1.slice(-1,-11)]) // substring replace the negative values with 0 and slice tries to slice the string according to given negative index.



let name = "     avantika     ";
console.table([name.trim() ,name.trimEnd() , name.trimStart()]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf

