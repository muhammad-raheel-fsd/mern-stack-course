// Values

// String
console.log("Js in fun");

// Number
console.log(100);

// Booleans
console.log(true);
console.log(false);

// Null
console.log(null);

// Undefined
console.log(undefined);

// Datatypes in js - 7
// 1- String
// 2- Number
// 3- Boolean
// 4- Null
// 5- Undefined
// 6- Symbol
// 7- BigInt

// paple
// apple

// Variables
age = 88;
console.log(typeof age);

age = "100";
console.log(typeof age);

// console.log(age)
// console.log(age)
// console.log(age)
// console.log(age)
// console.log(age)

// keywords

// 1- var
// 2- let
// 3- const

var num = 100;

let num2 = 100;

const num3 = 100;

console.log(num, num2, num3);
console.log(typeof num, typeof num2, typeof num3);

// 1- declaration
var aNumber;

// 2- assignment / initialization
aNumber = 100;

// Differences

var age;
age = 20;
var age;
age = 30;
console.log("AGE =======", age);

let gender;
gender = "male";
// let gender;
gender = "female";
console.log("GENDER =======", gender);

const city = "Burewala";
// city = "Lahore";
console.log("city =======", city);

// Scopes
// 1- global scope
// 2- local scope / block
// 3- module scope
// 4- script scope
// 5- function scope

// Operators
// 1- arithmetic operators (+, - , *, /) , % (modulus), **(exponent)
// 2- Assignment operator (=)

// Naming conventions
// 1 - no reserved words
// 2- cannot start with a number
// 3- cannot use hyphens

// Camel case
const numberOne = 10;
const numberTwo = 20;

console.log("SUM ==== ", numberOne + numberTwo);
console.log("DIFFERENCE ==== ", numberOne - numberTwo);
console.log("MUL ==== ", numberOne * numberTwo);
console.log("DIV ==== ", numberOne / numberTwo);
console.log("MOD ==== ", numberOne % numberTwo);
console.log("EXP ==== ", numberOne ** numberTwo);

// comparison operators
// 1- equal (==, ===)
// 2- greater than (>)
// 3- less than (<)

console.log(20 == 20);
console.log(20 == "20");
console.log(20 === "20");

console.log(22 > "21");
console.log(22 >= "21");
console.log(21 >= "21");

// logical operators
// 1 - and
// 2- or
// 3- not (inverter)

console.log("LOGICALS ======== ", true && true);
console.log("LOGICALS ======== ", true && false);

console.log("LOGICALS ======== ", true || true);
console.log("LOGICALS ======== ", true || false);

console.log("LOGICALS ======== ", !!true);

// Conditional / Control statements
// if - else

const condition = true;
const eligibleAge = 19;

if (false) console.log("Random Statement");
console.log("Random Statement");
console.log("Random Statement");
console.log("Random Statement");

if (condition) {
  console.log("True case");
  console.log("True case");
  console.log("True case");
  console.log("True case");
} else {
  console.log("False case");
}

if (eligibleAge >= 20) {
  console.log("You are eligible for a driving lisense");
} else {
  console.log("You are not eligible for a driving lisense");
}

const marks = 90;

if (marks >= 80 && marks <= 89) {
  // return "You are eligible for a driving";
  console.log("Your grade is A");
} else if (marks >= 70) {
  console.log("Your grade is B");
} else if (marks >= 60) {
  console.log("Your grade is C");
} else {
  console.log("Better luck next time.");
}

// Switch statement

const myCity = "Lahore";

switch (myCity) {
  case "Burewala":
    console.log("Your city is: ", myCity);
    console.log("Another random value");
    break;
  case "Lahore":
    console.log("Your city is:" + myCity);
    console.log("Your city is: ", myCity);
    break;
  default:
    console.log("Invalid address");
}

// Average of three numbers
console.log("Average of three numbers", (2 + 6 + 10) / 3);

// Strings and template literals
const username = "Raheel";
const yourAge = 40;

console.log(
  "Your  name is " + username + "         and age               is " + yourAge
);

console.log(`Your 
  name
   is
    ${username} and your age is ${yourAge}`);

// Functions

function addition(a, b) {
  return;
  return a + b;
}
// Parameters, Arguments, return statements
const result = addition(100, 200);

console.log(addition(100, 200));
console.log(result);

// Example 01
function averageOfThreeNumbers(firstValue, secondValue, thirdValue) {
  return (firstValue + secondValue + thirdValue) / 3;
}
console.log(averageOfThreeNumbers(10, 20, 30));

// Example 02
function evenOrOddNumber(num) {
  if (num % 2 === 0) {
    return "The number is even";
  } else {
    return "The number is odd";
  }
}

console.log(evenOrOddNumber(30));

// Type conversion
// Type coersion


