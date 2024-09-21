// global or function scope
// block scope
{
  var username = "Raheel";
  let age = 40;
  const contact = 1234567890;
  console.log("BLOCK AGE ==== ", age);
  console.log("BLOCK CONTACT ==== ", contact);
}

// functional scope

var profession = "Development";

function displayInfo() {
  profession = "Teaching";
  console.log("PROFESSION ==== ", profession);
  var username = "John Doe";
  let age = 30;
  const contact = 9876543210;
  console.log("FUNCTION AGE ==== ", age);
  console.log("FUNCTION CONTACT ==== ", contact);
}

displayInfo();
// console.log("PROFESSION OUT ==== ", profession);
// console.log("USERNAME ==== ", username);
// console.log("AGE ==== ", age);
// console.log("CONTACT ==== ", contact);

// type coercion and type conversion

let num1 = "0";
let num2 = "100";

console.log("Number 1 + Number 2 ==== ", num2 - num1);
console.log("Number 1 + Number 2 ==== ", num1 + num2);
console.log("Number 1 = Number 2 ==== ", num1 - num2);
console.log("Number 1 = Number 2 ==== ", num1 * num2);
console.log("Number 1 = Number 2 ==== ", num1 / num2);
console.log("Number 1 = Number 2 ==== ", num1 ** num2);
// console.log(typeof NaN)
console.log("Greater", num1 > num2);

// Booleans
// true, false (logical values)

// truthy and falsey values
// falsey (0, "", null, undefined, NaN)

const falseyValue = 0;

if (1) {
  console.log("Keep going");
} else {
  console.log("Please do some job.");
}

// Conversions

const num = "100.2B9A";

console.log("Conversions here...");
console.log(Number(num));
console.log(parseInt(num));
console.log(parseFloat(num));

// String conversions
console.log("Conversions here...");
console.log(String(100));
console.log(String(0));
console.log(String(false));
console.log(String(NaN));
console.log(String(undefined));

// String conversions
console.log("Conversions here...");
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(0.01));

const newNum = 10;
const anotherNum = +"20";

console.log(newNum + anotherNum);

console.log(+"3");
console.log(10 ** +"3");
console.log(10 + "3");
console.log(!!10);

// Expressions and statements
const x = 10;

// Function expression
const logger = function () {
  console.log("Console =======");
};
// Function declaration
function loggerHere() {
  console.log("Console =======");
}

console.log(logger());
console.log(logger);
console.log(loggerHere);

// Non Primitive
// Arrays and objects

const arr = ["Rehman", NaN, true, 10, "Shahid", undefined];

// console.log("Array =======", arr);
// console.log("Array =======", arr.length);
// console.log("Array value =======", arr[1]);
// console.log("Array value =======", arr[5]);
// console.log("Array value =======", arr[arr.length / 2 - 1]);
// console.log("Array value =======", arr[arr.length - 1]);
// console.log("Array value =======", arr[arr.length - arr.length]);
// console.log("Array value =======", arr[0]);

// for(let index = 0; index < arr.length; index++){
//   console.log("Array value =======", arr[index])
// }

const multiArray = [1, "name", [1, 2, 4, null]];
// Recursion
console.log(multiArray);

const tabularArray = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
];

for (let outerIndex = 0; outerIndex < tabularArray.length; outerIndex++) {
  const innerArray = tabularArray[outerIndex];
  for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
    console.log(`${outerIndex} x ${innerIndex} ===> ${innerArray[innerIndex]}`);
  }
}

// Mid value
// const mid = arr[arr.length / 2];

// 00x60083

const numbers = [10, 20, 30, 40, 50, 60];

const midAndAvgOfNumbers = function (arr) {
  const mid = arr.length % 2;
  if (mid === 0) {
    // avg of mid two numbers
    const mid = arr.length / 2;
    const midValue = arr[mid];
    const beforeValue = arr[mid - 1];
    console.log("MID === ", beforeValue, midValue);
  } else {
    return arr[(arr.length - 1) / 2];
  }
};
console.log(midAndAvgOfNumbers(numbers));

// Loops in arrays

// 1- for loop
// 2- while loop
// 3- do while loop

// 1- for loop
// for(counter, condition, increment/decrement){

// }

const numArray = [10, 20, 30, 40, 50, 60, 70, 80];
for (let counter = 1; counter <= numArray.length; counter++) {
  console.log("I'm learning JS");
}

// let whileCounter = 1;
// while (whileCounter <= 5) {
let initiator = 0;
// while (initiator <= numArray.length) {
while (false) {
  console.log("While...");
  // whileCounter++;
  initiator++;
}

// 3- do while loop
let doWhileInitiator = 1;
do {
  console.log("Do while...");
  doWhileInitiator++;
} while (false);

let count = 1;
// post increment / decrement
count++;
count = count + 1;
// pre increment
// ++count;
// console.log("count", ++count);
// console.log("count", count++);

count = count - 1;
count += count;

// Example
// Table of 2

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8

// continue, break

for (let counter = 1; counter < 11; counter++) {
  // continue;
  // if (counter === 5) continue;
  if (counter === 5) break;
  console.log(`2 * ${counter} = ${counter * 2}`);
}

// for (let counter = 10; counter >= 1; counter--) {
//   console.log(`2 * ${counter} = ${counter * 2}`);
// }

// console.log("count", --count);
console.log("count", count);
// Ternary operator (expression)

const condition = true;
const trueCase = "There goes true statement";
const falseCase = "There goes false statement";

// condition ? console.log(trueCase) : console.log(falseCase);

const value = condition ? trueCase : falseCase;
console.log(value);

// HOF (Higher Order Function) and callback

function HOF(callback) {
  // console.log("ARG", callback);
  callback();
}
function loggerForCallback() {
  console.log("Callback goes here");
}
HOF(loggerForCallback);

// Average of three numbers
function averageOfThree(num1, num2, num3, callback) {
  const sum = num1 + num2 + num3;
  const avg = sum / 3;
  callback(avg);
  return avg;
}

averageOfThree(10, 20, 30, function (avg) {
  console.log("Average", avg);
});

function showSomething(something) {
  console.log(something);
}

showSomething("Hello");
showSomethingHoF(showSomethingCallback);

function showSomethingHoF(callback) {
  callback("Hello something");
}
function showSomethingCallback(arg) {
  console.log(arg);
}

// Arrays
const someRandomNumbers = [1, 2, 3, 4, 5, 6, 7,8,9];
// someRandomNumbers = [1, 6, 7];

// const someNum = 10;
// someNum = 10;

// delete someRandomNumbers[5];

// for (let index = 0; index < someRandomNumbers.length; index++) {
//   console.log(someRandomNumbers[index]);
// }

someRandomNumbers[0] = 10;
console.log("Random", someRandomNumbers[0], someRandomNumbers);

// Objects

const person = {
  // Properties
  personName: "Raheel",
  name: "Raheel",
  height: 6,
  weight: 80,
  male: true,
  female: false,

  // Methods
  heWalks: function (username) {
    this.personName = username;
    // console.log(username)
    console.log(`${this.personName} walks...`);
    console.log(`${person.personName} walks...`);
    console.log(`${person["personName"]} walks...`);

    // return `${person["personName"]} walks...`
  },
};

person.personName = "John";
person["personName"] = "Celine";

delete person.personName;
delete person["name"];

person.profession = "Development";
person["age"] = 40;

const someOne = "personName";
console.log("Person", person);
console.log("Person", person[someOne]);
console.log("Person", person.personName);
console.log("Person", person.height);
person.heWalks("Rehman");
console.log("Person", person);
// console.log("Person", person);
// console.log("Person", person.heWalks("Rehman"));
// console.log("Person", name);
// console.log("Person", someOne);

// Basic array methods

console.log(typeof person);
console.log(typeof someRandomNumbers);

// Insert a new value at the end of array
someRandomNumbers[someRandomNumbers.length] = 100
delete someRandomNumbers[someRandomNumbers.length - 1]
console.log("ARRAY", someRandomNumbers)
someRandomNumbers[someRandomNumbers.length] = 300
console.log("ARRAY", someRandomNumbers)

// 1- push, 2- pop, 3- shift, 4- unshift

someRandomNumbers.push(1000)
console.log("ARRAY", someRandomNumbers)

// Remove last element
someRandomNumbers.pop()
console.log("ARRAY", someRandomNumbers)

someRandomNumbers.push(2000)
console.log("ARRAY", someRandomNumbers)