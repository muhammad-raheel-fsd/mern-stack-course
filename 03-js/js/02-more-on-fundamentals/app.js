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

console.log("Array =======", arr);
console.log("Array =======", arr.length);
console.log("Array value =======", arr[1]);
console.log("Array value =======", arr[5]);
console.log("Array value =======", arr[arr.length / 2 - 1]);
console.log("Array value =======", arr[arr.length - 1]);
console.log("Array value =======", arr[arr.length - arr.length]);
console.log("Array value =======", arr[0]);

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

// Ternary operator

console.log(midAndAvgOfNumbers(numbers));
