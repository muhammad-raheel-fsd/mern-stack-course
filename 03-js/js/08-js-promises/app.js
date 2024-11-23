// const excuse = false;

// const resolveButton = document.getElementById("resolve-button");
// const rejectButton = document.getElementById("reject-button");
// const dataButton = document.getElementById("data-button");

// const promise = new Promise((resolve, reject) => {
//   resolveButton.addEventListener("click", () => {
//     resolve("Promise resolved...");
//   });
//   rejectButton.addEventListener("click", () => {
//     reject("Promise rejected...");
//   });

//   setTimeout(() => {
//     reject("Promise rejected...");
//   }, 0);
// });

// promise
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

// const letsHaveSomeTea = new Promise((resolve, reject) => {
//   if (excuse) {
//     reject("I'm sorry, I can't make it today.");
//   } else {
//     resolve("Hey, let's have some tea today.");
//   }
// });

// letsHaveSomeTea.then((message) => console.log(message));
// letsHaveSomeTea.catch((error) => console.log(error));

// console.log(letsHaveSomeTea);

// const excuse = true;
// new Promise((resolve, reject) => {
//   if (excuse) reject("Just rejected");
//   resolve("Let's do it");
// })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => console.log(err));

// const showSomething = () => console.log("Arrow log...");

// console.log("Log 1...");

// showSomething();

// console.log("Log 2...");

// Line by line 1, 2, 3...

// 1- Default
// 2 - Promises
// 3- Timers

// API's (Application Programming Interface)

// https://jsonplaceholder.typicode.com/users

// XHR (XMLHttpRequest)
// Fetch (window.fetch)

// window
//   .fetch("https://jsonplaceholder.typicode.com/users") // GET
//   .then((result) => {
//     return result.json(); // Convert to JSON
//   })
//   .then((data) => console.log(data)) //Data
//   .catch((err) => console.log(err));

// let apiData;

// dataButton.addEventListener("click", (event) => {
//   window
//     .fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// });

// console.log(apiData);

// then, catch

// Recap

setTimeout(() => {
  console.log("Timeout...");
});

console.log("Log 1...");

const promiseCallback = (resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved...");
  }, 2000);
};
const justAPromise = new Promise(promiseCallback);

justAPromise.then((message) => console.log(message));
justAPromise.catch((err) => console.log(err));

console.log("Log 2...");
console.log("Log 3...");

// 1- Default
// 2 - Promises
// 3- Timers

// API's (Applications Programming Interface)

// 1- xhr requests
// 2- fetch - promise based

// https://jsonplaceholder.typicode.com/users
// window.fetch("Resource")

// 1- GET - Data fetching
// 2- POST - Data sending
// 3- PUT - Data updating - whole
// 4- PATCH - Data updating - specific
// 5- DELETE - Data deleting

window
  .fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Callbacks
function getUser(id, callback) {
  callback({ id: id, githubUsername: "jerrycode06" });
}

getUser(1, (user) => {
  console.log("User", user);
});

// Callback Hell

getUser(1, (user) => {
  console.log("User", user);

  getUser(2, (user2) => {
    console.log("User 2", user2);

    getUser(3, (user3) => {
      console.log("User 3", user3);

      getUser(4, (user4) => {
        console.log("User 4", user4);

        getUser(5, (user5) => {
          console.log("User 5", user5);
        });
      });
    });
  });
});

// IIFE - Immediately Invoked Function Expression
(function () {
  console.log("Anonymous function...");
})();

// Async await

const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("API error", error.message);
  }
};

// console.log(getAllUsers());
// getAllUsers().then((data) => console.log(data));
// (async () => {
//   const data = await getAllUsers();
//   console.log(data);
// })();

(async () => {
  const data = await getAllUsers();
  console.log("All users", data);
})();

// Try catch

const showSomeErrorAndResult = (arr) => {
  try {
    if (!Array.isArray(arr)) throw new Error("Not an array");
    console.log(arr.length);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally block...");
  }
};

showSomeErrorAndResult(20);
