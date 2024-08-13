let date1 = new Date(); //date at current instance
// console.log(date1)
// console.log(date1.toString())
// console.log(date1.toLocaleString())
// console.log(date1.toISOString())
// console.log(date1.toJSON())
// console.log(date1.toDateString())


let date2 = new Date("12-12-2024")
//console.log(date2)

let date3 = new Date(2024,0,13,1,19)
//console.log(date3.toLocaleString())

let date4 = new Date("08-13-2024")
//console.log(date4.toDateString())


let timestamp = Date.now();
//console.log(timestamp); // time in miliseconds from jan 1970(standard date picked by ecmascript developer)
// console.log(date4.getTime()) // time in millisecond
// console.log(date4.getTime() / 1000) // time in seconds

let todayDate = new Date();
console.log(todayDate)
console.table([todayDate.getDay(), todayDate.getFullYear(), todayDate.getMonth(),todayDate.getTime() ,todayDate.getHours(), todayDate.getSeconds()])
