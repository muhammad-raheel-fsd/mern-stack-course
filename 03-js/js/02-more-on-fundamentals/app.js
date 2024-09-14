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

let num1 = "10";
let num2 = "5A";

console.log("Number 1 + Number 2 ==== ", num2 - num1);
console.log("Number 1 + Number 2 ==== ", num1 + num2);
console.log("Number 1 = Number 2 ==== ", num1 - num2);
console.log("Number 1 = Number 2 ==== ", num1 * num2);
console.log("Number 1 = Number 2 ==== ", num1 / num2);
console.log("Number 1 = Number 2 ==== ", num1 ** num2);
console.log("Greater", num1 > num2);

// Booleans
// true, false (logical values)

// truthy and falsey values
// falsey (0, "", null, undefined, NaN)

const falseyValue = 0;

if (NaN) {
    console.log("Keep going");
} else {
    console.log("Please do some job.");
}
