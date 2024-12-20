const button = document.getElementById("button");
const main = document.getElementById("main");
const picker = document.getElementById("picker");
picker.style.display = "none";

const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const generateRandomHex = function () {
  return Math.floor(Math.random() * 16);
};

let color = "";
button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += HEX[generateRandomHex()];
  }
  main.style.backgroundColor = hexColor;
  picker.innerText = hexColor;
  color = hexColor;
  picker.style.display = "block";
});

picker.addEventListener("click", function () {
  window.navigator.clipboard.writeText(color);
  alert("Color copied to clipboard")
  picker.style.display = "none";
});

// console.log(Math.random() * 10);

// 0  ... 1

// console.log(0.99335434 * 10);
// console.log(Math.floor(0.92335434 * 10));
// console.log(Math.ceil(0.92335434 * 10));
// console.log(Math.round(0.93 * 10));

console.log(window.navigator.clipboard);

// alert
// confirm
// prompt
