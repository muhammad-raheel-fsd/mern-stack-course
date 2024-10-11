"use strict";

//  username = "Raheel";
// console.log(username);

const logger = function () {
  //   "use strict";
  let log = "We are learning js";
  console.log(log);
};
logger();

const scopeValue = "Global value...";
var globalValue = "Global value...";

// Array methods
const someRandomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 0:1, 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9;
console.log(someRandomNumbers);

// Pop
someRandomNumbers.pop();
console.log("POP", someRandomNumbers);

// Push
someRandomNumbers.push("value");
console.log("PUSH", someRandomNumbers);

// Shift
someRandomNumbers.shift();
console.log("SHIFT", someRandomNumbers);

// Unshift
someRandomNumbers.unshift("Js");
console.log("UNSHIFT", someRandomNumbers);

// Shift element manually

// {
//   var justaValue = "just a value";
// }

// console.log("just a value", justaValue);

const shiftElementM1 = function (arr) {
  const aValue = "just a value";
  const newArray = [];
  delete arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;
    console.log("ELE", i, arr[i]);
    newArray[i - 1] = arr[i];
  }
  return newArray;
};

console.log("Shifted array", shiftElementM1(someRandomNumbers));

const shiftElementM2 = function (arr) {
  const newArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray[i - 1] = arr[i];
  }
  return newArray;
};

console.log("Shifted array M2", shiftElementM2(someRandomNumbers));

someRandomNumbers.shift();
console.log("Shifted array shift", someRandomNumbers);

// forEach
// someRandomNumbers.forEach(function (value, index, arr) {
//   console.log("forEach", value, index, arr);
// });

const forEachCallback = function (value, index, arr) {
  console.log("forEach", value, index);
};
someRandomNumbers.forEach(forEachCallback);

// console.log("FOR_", someRandomNumbers.forEach());

// Higher order functions and callbacks

// const higherOrderFunction = function (callback) {
//   callback("I'm newbie in js");
// };

// const callbackFunction = function (log) {
//   console.log("LOG ===", log);
// };
// higherOrderFunction(callbackFunction);

// Factorial
// 5 fact = 5  * 4 * 3 * 2* 1

// const factorial = function (number) {
//   // num = 5
//   let fact = 1;
//   for (let index = number; index > 0; index--) {
//     fact = fact * index;
//     // console.log({ fact });
//     // fact + fact
//     // fact = fact + fact;
//   }
//   return fact;
// };
function factorial(number) {
  // num = 5
  let fact = 1;
  for (let index = number; index > 0; index--) {
    fact = fact * index;
    // console.log({ fact });
    // fact + fact
    // fact = fact + fact;
  }
  return fact;
}
const factorialWithArray = function (arr) {
  let fact = 1;
  arr.forEach(function (value, index, arr) {
    // continue;
    // break;
    fact = fact * value;
  });
  return fact;
};

console.log("FACT", factorial(5));
console.log("FACT", factorialWithArray([5, 4, 3, 2, 1]));
// factorial(5);

const higherOrderFunction = function (arr, callback) {
  //   console.log("Shifted", callback(arr));
  return callback(arr);
};
const shiftCallback = function (arr) {
  const newArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray[i - 1] = arr[i];
  }
  return newArray;
};
const shiftedValue = higherOrderFunction(someRandomNumbers, shiftCallback);

console.log("shifted", shiftedValue);

// Unshift element manually

const unShiftElement = function (arr, element) {
  const newArray = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i === 0) {
      console.log("Control", i, element);
      newArray[i] = element;
      continue;
    }
    newArray[i] = arr[i - 1];
  }
  return newArray;
};

const modifiedArray = unShiftElement(someRandomNumbers, "new value");

console.log(
  "Unshifting",
  someRandomNumbers,
  unShiftElement(someRandomNumbers, "new value")
);

// Object methods

const username = "Janab";
const person = {
  // username: "person",
  // username: username,
  username,
  age: 28,
  getUserDetails: function () {
    return `${this.username} is ${this.age} years old`;
  },
  toString: function (stringHere) {
    return `${this.username} is ${this.age} years old`;
  },
};

console.log(person);
console.log("string", person.toString());
console.log(typeof person.toString());

// const newObject = Object()

const newObject = {};
const newConstructObject = Object();

console.log({}, Object());
console.log([]);
console.log("construct", {}.constructor, Object());
console.log({}.constructor());
console.log([].constructor());

// Object methods
const student = {
  name: "Rehman",
  fatherName: "Aman",
  gender: "Male",
  age: 17,
  height: 6,
  weight: 55,

  getDetails: function () {
    return `Name: ${this.name}, Father Name: ${this.fatherName}, Gender: ${this.gender}, Age: ${this.age}, Height: ${this.height}cm, Weight: ${this.weight}kg`;
  },
};

// User defined method
console.log(student);
console.log(student.getDetails());

// Built in methods
console.log(student.hasOwnProperty("age"));

// Constructor methods
console.log("construct", Object);
console.log("construct", factorial);
// const obj = Object(student);
// console.log("OBJ", obj);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// map, filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const callback = function (value, index, arr) {
  console.log("CALLED", value);
  const multiple = value * 2;
  return multiple;
};
const mappedArray = numbers.map(callback);
console.log("mappedArray", mappedArray);

const filterCallback = function (value, index, arr) {
  console.log("CALLED", value);
  const isEven = value % 2 === 0;
  return isEven;
};
const filteredArray = numbers.filter(filterCallback);
console.log("filteredArray", filteredArray);
