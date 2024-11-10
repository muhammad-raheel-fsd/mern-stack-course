const excuse = false;

const letsHaveSomeTea = new Promise((resolve, reject) => {
  if (excuse) {
    reject("I'm sorry, I can't make it today.");
  } else {
    resolve("Hey, let's have some tea today.");
  }
});

letsHaveSomeTea.then((message) => console.log(message));
letsHaveSomeTea.catch((error) => console.log(error));

console.log(letsHaveSomeTea);

// const excuse = true;
// new Promise((resolve, reject) => {
//   if (excuse) reject("Just rejected");
//   resolve("Let's do it");
// })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => console.log(err));

const resolveButton = document.getElementById("resolve-button");
const rejectButton = document.getElementById("reject-button");

const promise = new Promise((resolve, reject) => {
  resolveButton.addEventListener("click", () => {
    resolve("Promise resolved...");
  });
  rejectButton.addEventListener("click", () => {
    reject("Promise rejected...");
  });

  setTimeout(() => {
    reject("Promise rejected...");
  }, 5000);
});

promise
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
