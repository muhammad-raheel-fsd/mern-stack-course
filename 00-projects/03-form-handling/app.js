// Targetting

// document.write(
//   "<h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, quidem sed voluptas unde veritatis quo facere rem officia explicabo sint, molestiae magnam et iste. Autem illum officiis asperiores ut. Exercitationem.</h1>"
// );

const ROOT = document.getElementById("root");

// Creating elements
const section = document.createElement("section");
const form = document.createElement("form");
form.name = "user-details";
form.id = "details-form";

// Name input
const nameInput = createInputElement(
  "text",
  "Enter your name here",
  "username"
  // true
);
const nameInputLabel = createInputLabel("Enter your name here", "username");

const nameInputGroup = wrapMultipleElements(
  [nameInputLabel, nameInput],
  "input-group"
);

// Age input
const ageInput = createInputElement("number", "Enter your age here", "age");
const ageInputLabel = createInputLabel("Enter your age here", "age");
const ageInputGroup = wrapMultipleElements(
  [ageInputLabel, ageInput],
  "input-group"
);

// Email input
const emailInput = createInputElement(
  "email",
  "Enter your email here",
  "email"
);
const emailInputLabel = createInputLabel("Enter your email here", "email");
const emailInputGroup = wrapMultipleElements(
  [emailInputLabel, emailInput],
  "input-group"
);

// Select Gender Label
const selectGenderLabel = createInputLabel("Select your gender", "");

// Radio buttons
const maleRadioInput = createInputElement(
  "radio",
  "",
  "male",
  "gender",
  "male"
);
const maleRadioLabel = createInputLabel("Male", "male");
const maleRadioWrapper = wrapMultipleElements(
  [maleRadioLabel, maleRadioInput],
  ""
);

const femaleRadioInput = createInputElement(
  "radio",
  "",
  "female",
  "gender",
  "female"
);
const femaleRadioLabel = createInputLabel("Female", "female");
const femaleRadioWrapper = wrapMultipleElements(
  [femaleRadioLabel, femaleRadioInput],
  ""
);

const genderRadioWrapper = wrapMultipleElements(
  [
    selectGenderLabel,
    wrapMultipleElements([maleRadioWrapper, femaleRadioWrapper]),
  ],
  "input-group"
);

const submitBtn = document.createElement("button");
submitBtn.innerText = "Submit";

// Appending elements

form.appendChild(nameInputGroup);
form.appendChild(ageInputGroup);
form.appendChild(emailInputGroup);
form.appendChild(genderRadioWrapper);
form.appendChild(submitBtn);

section.appendChild(form);
ROOT.appendChild(section);

// Event Listener for form
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const name = document.getElementById("username").value;
//   const age = document.getElementById("age").value;
//   const email = document.getElementById("email").value;
//   // const male = document.getElementById("male").checked;
//   // const female = document.getElementById("female").checked;
//   // const gender = document.querySelector('input[name="gender"]:checked').value;
//   console.table([name, age, email, gender]);
//   // console.log({ male, female });

// });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.dir(event.target);
  // console.dir(event.target[0].value);
  // console.dir(event.target[1].value);
  // console.dir(event.target[2].value);
  // console.dir(event.target[3].value);
  // console.dir(event.target["gender"]);
  // console.dir(event.target["gender"]);

  // const gender = Array.from(event.target["gender"]).filter(function (element) {
  //   const condition = element.value && element.checked;
  //   debugger;
  //   return condition;
  // })[0].value;

  const name = event.target.username.value;
  const age = event.target.age.value;
  const email = event.target.email.value;
  const gender = event.target.gender.value;

  console.table([name, age, email, gender]);
});

// Utils
function createInputElement(type, placeholder, id, name = "", value = "") {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.placeholder = placeholder;
  inputElement.id = id;
  inputElement.name = name;
  inputElement.value = value;
  return inputElement;
}

// generate label

function createInputLabel(labelText, labelFor) {
  const labelField = document.createElement("label");
  labelField.setAttribute("for", labelFor);
  labelField.innerText = labelText;

  return labelField;
}

// function wrapInputAndLabel(label, input) {
//   const wrapper = document.createElement("div");
//   wrapper.classList.add("input-wrapper");
//   wrapper.appendChild(label);
//   wrapper.appendChild(input);
//   return wrapper;
// }
function wrapMultipleElements(elements, className) {
  const wrapper = document.createElement("div");
  // if (className) wrapper.classList.add(className);
  // elements.forEach(function (element) {
  //   wrapper.appendChild(element);
  // });
  className && wrapper.classList.add(className);
  elements.forEach(function (element) {
    wrapper.appendChild(element);
  });
  return wrapper;
}

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms["user-details"]);
console.log(document.forms["details-form"]);
