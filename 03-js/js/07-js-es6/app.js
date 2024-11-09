// console.log(window.document.addEventListener)

// document.querySelectorAll("button").forEach((button) => {
//   console.log(button);
// });

// This keyword in js

console.log("This =======>", this);

function showSomething(params) {
  console.log("Inner this =======>", this);
}

const userObject = {
  username: "user",
  showSomething(params) {
    console.log("Object Inner this =======>", this);
  },
};

showSomething();
userObject.showSomething();

// ES6 starts here

function sum(val1 = 5, val2 = 10) {
  return val1 + val2;
}
console.log("SUM", sum());

// const arrow = () => {
//   return 10 + 20;
// };
// const arrow = () => 10 + 20;
// const arrow = () => ({
//   name: "arrow",
//   type: "function",
// });

// const arrow = () => {
//   console.log("THIS", this);
// };

// const arrow = num => num ** 2;

const arrow = function (num) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
  console.log(Array.isArray([1, 2, 3, 4]));
  console.log([]);
  return num ** 2;
};
console.log(arrow(15, 3, 1, 2, 34, 5, 6, 74, 65));

// Array and object destructuring
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const user = {
  username: "user",
  age: 30,
  email: "user@example.com",
  // details: () => {
  //   return `${this.username} is ${this.age} years old`;
  // },
  details: function () {
    return `${this.username} is ${this.age} years old`;
  },
};

// const username = user.username;
// const age = user.age;
// const email = user.email;
// console.log(user.username);
// console.log(user.details());

// const { username, age } = user;
// console.log(username, age);

// const val1 = numbers[0]
// const val2 = numbers[1]

const [first, second, fifth, , , fourth] = numbers;
console.log([first, second, fifth, , , fourth]);

// Rest and spread operators  ...

const [one, two, ...restArray] = numbers;
console.log(one, two, restArray);

const { username, age, ...restObject } = user;
console.log(username, age, restObject);

// Difference
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

console.log(myGirls);
console.log(...myGirls);
const newArray = [...myGirls, ...myBoys];

const sumUpSomeNumber = function (first, second, ...rest) {
  console.log(arguments);
  console.log(first, second, rest);
};

sumUpSomeNumber(10, 20);
sumUpSomeNumber(10, 20, 30);
sumUpSomeNumber(10, 20, 30, 40);
sumUpSomeNumber(10, 20, 30, 40, 50);

const userDetails = {
  username: "user",
  age: 30,
  email: "user@gmail.com",
  address: {
    country: "Pakistan",
    province: {
      name: "Punjab",
      city: {
        name: "Burewala",
        zipCode: 61010,
        district: "Vehari",
      },
    },
  },
};

// Aliasing
const {
  username: hisName,
  age: hisAge,
  email,
  address: {
    province: {
      city: { zipCode },
    },
  },
} = userDetails;

// const { province } = address;
// const { city } = province;
// const { zipCode } = city;

console.log(hisName, hisAge, zipCode);

const course = {
  mern_stack: {
    html: {
      modules: ["basics", "forms", "tables"],
    },
    css: {
      modules: ["basics", "flexbox", "grid"],
    },
    js: {
      modules: ["basics", "functions", "objects", "arrays", "events", "dom"],
    },
    react: {
      modules: ["basics", "components", "props", "state", "hooks"],
    },
  },
};

const {
  mern_stack: {
    css: { modules: cssModules },
    js,
    // react: { modules: reactModules },
  },
} = course;

// console.log(modules, js);

// Optional chaining

const currentModule = course.mern_stack.react?.modules
console.log(currentModule);