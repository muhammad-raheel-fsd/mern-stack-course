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

// Practice
const classElements = document.getElementsByClassName("content");
const moreClassElements = document.querySelectorAll(".content");
const moreElementsWithQuery = document.querySelectorAll("#text");

console.log({ classElements, moreClassElements, moreElementsWithQuery });

const singleElementWithQuery = document.querySelector(".content");
const singleIdElementWithQuery = document.querySelector("#text");
console.log({ singleElementWithQuery, singleIdElementWithQuery });
singleElementWithQuery.innerText = "Some text here...";

// Multiple elements
// Getting and setting text
moreElementsWithQuery.innerText = "Some text here...";
moreElementsWithQuery[0].innerText = "Some text here...";
moreElementsWithQuery[1].innerText = "Some text here...";
moreElementsWithQuery[2].innerText = "Some text here...";

moreClassElements.forEach(function (element) {
  element.innerText = "Passing text to multiple elements...";
});

// Style
singleElementWithQuery.style.color = "red";
singleElementWithQuery.style.backgroundColor = "green";
singleElementWithQuery.style.padding = "20px";
singleElementWithQuery.style.border = "20px";
singleElementWithQuery.style.borderStyle = "solid";
// singleElementWithQuery.style.borderLeftColor = "orange";

console.log({ style: singleElementWithQuery.style });

// Event listeners

const buttonClickListener = function (event) {
  console.log(event);
  console.log("buttonClickListener");
};

// Button here

const button = document.getElementById("button");
button.addEventListener("click", function (event) {
  console.log(event, "Clicked...");
});
