"use strict";

//  username = "Raheel";
// console.log(username);

const logger = function () {
  //   "use strict";
  let log = "We are learning js";
  console.log(log);
};
logger();

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

const shiftElementM1 = function (arr) {
  delete arr[0];
  const newArray = [];
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

console.log("shifted", shiftedValue)
