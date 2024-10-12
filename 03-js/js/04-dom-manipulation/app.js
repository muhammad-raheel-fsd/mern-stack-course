// DOM (Document Object Model)

// const DOM = {
//   html: {
//     head: { title: "My document" },
//     body: {
//       section: {
//         h2: "Hero section",
//         p: "Paragraph of the hero section",
//       },
//     },
//   },
// };

// var myName = "Raheel"

console.log(window);
console.log(window.document);
console.log(window.document.head);
console.log(document.head);
console.log(document.body);
console.log(document.head.title.textContent);
console.log(document.head.title.innerText);
console.log(document.head.title.innerHTML);
console.log(document.body.h1);

// Getting elements

const elements = document.getElementsByTagName("h1");

console.log(elements[0].innerText);
console.log(elements[1].textContent);
console.log(elements[2].innerHTML);

// elements[0].innerText = "Hello there...";

const firstElement = document.getElementById("title");
firstElement.innerText = "First Element Here...";
console.log(firstElement);

const moreElements = document.getElementsByName("heading");
console.log(moreElements);

// const moreQueryElements = document.querySelector("title"); // tag name
const moreQueryElements = document.querySelector("#title"); // id
// const moreQueryElements = document.querySelector(".title"); // class
// document.querySelectorAll("")
console.log(moreQueryElements);

// Getting text

// Style
