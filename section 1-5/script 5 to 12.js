let js =  'amazing';
console.log(40 + 8 + 23 - 10);

'Jonas'
// 'Jonas' this alone is a value

console.log("Jonas");
// but if you want a value to show up on screen you need to use console.log() to log it to the console 

let firstName = 'Jonas'
//  this is declaring a variable called firstName and assigning it the value of 'Jonas'
// whicch means It store in a computer memory.

console.log(firstName);
// on our screen we will see Jonas not firstName.

// value name can't start with number and con't start with a uppercase letter.
// let 3years = 3; // this is wrong
// let Kai = 'Kai'; // this is wrong


// If value's names are uppercase letters, this means that value is a constant and can't be changed.
let PI = 3.1415;
// this mean PI = 3.1415 and can't be changed.



// valur name can only contain letters, numbers, underscores and dollar signs.

// reade more about value in read me.md file.

// Boolean type
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Typeof use to check status of that value
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');

//  we can re-define value this is call dynamic javascript
// by doing this 
javascriptIsFun = 'Yes!';

// change a value of variable by type a name of variable without let 
//  analogy : first you put a book in a box and take a book out then put a phone inside of a box instead.
console.log( typeof javascriptIsFun);


// undefine
let year;
console.log;(year);
console.log(typeof year)

// In browser should be undefine and type of this variable should be undefine.
// right now year is holding a value  undefine

// we can re-define to anything.
year = 1991;

// there's a error of typeof 

console.log(typeof null)
//  null and undefine value is similar but when we run this in our browser 
// it will appera  object, this is just a bug of data type in javascript.


///////////////  ///////////////////////////////////////////////////
// 
// Declare a variable by  LET, CONST, VAR

////////////////////////////////////////////////////////////////////

// from the brginning we only use let to define  value but actully there're 3 of them,
// in most case only use let and const but var is for sake of history

let age = 30;
age = 31;

// let : can re-define or mutate value of variable.

// but const can't redefine or immutate.
const birthYear = 1991;

// and const can't leave without value
// const job; (must put value in const)