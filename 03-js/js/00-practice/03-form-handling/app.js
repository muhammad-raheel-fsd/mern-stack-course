// Targetting
const ROOT = document.getElementById("root");

// Creating elements
const section = document.createElement("section");
const form = document.createElement("form");
const nameInput = createInputElement("text", "Enter your name here", true);
const ageInput = createInputElement("number", "Enter your age here", true);
// const input = document.createElement("input");
// input.setAttribute("type", "number");
// input.type = "number"

// console.dir(input);

// Appending elements

form.appendChild(nameInput);
form.appendChild(ageInput);

section.appendChild(form);
ROOT.appendChild(section);

// Utils
function createInputElement(type, placeholder, label = false) {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.placeholder = placeholder;

  if (label) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");
    const labelField = document.createElement("label");
    labelField.innerText = placeholder;

    wrapper.appendChild(labelField);
    wrapper.appendChild(inputElement);
    return wrapper;
  }

  return inputElement;
}
