const main = document.getElementById("root");

// Creating elements
// const heading = document.createElement("h1");
// const textNode = document.createTextNode("Learn More");
// heading.innerText = "Learning js is fun!";
// heading.appendChild(textNode);
// main.appendChild(heading);
// main.removeChild(heading);

// const button = document.createElement("button");
// button.appendChild(document.createTextNode("Click here"));
// main.appendChild(button);

// button.addEventListener("click", function (event) {
//   console.log(event.target.innerText);
//   console.log(event);
// });

const section = document.createElement("section");

const padButtons = [
  {
    text: 1,
  },
  {
    text: 2,
  },
  {
    text: 3,
  },
  {
    text: 4,
  },
  {
    text: 5,
  },
  {
    text: 6,
  },
  {
    text: 7,
  },
  {
    text: 8,
  },
  {
    text: 9,
  },
  {
    text: "*",
  },
  {
    text: 0,
  },
  {
    text: "#",
  },
];

for (let index = 0; index < padButtons.length; index++) {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode(padButtons[index].text));
  button.addEventListener("click", function (event) {
    console.log(event.target.innerText);
  });
  section.appendChild(button);
}

main.appendChild(section);
