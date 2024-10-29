// Timers

// setTimeout
// setInterval

const timeoutId = window.setTimeout(function () {
  console.log("Timeout...");
}, 5000);

const intervalId = window.setInterval(function () {
  console.log("Interval...");
}, 2000);

// console.log({
//   intervalId,
//   timeoutId,
// });

const clearIntervalButton = document.getElementById("clear-interval");

const clearTimeoutButton = document.getElementById("clear-timeout");

clearIntervalButton.addEventListener("click", function () {
  window.clearInterval(intervalId);
});

clearTimeoutButton.addEventListener("click", function () {
  window.clearTimeout(timeoutId);
});

// Storage
// console.log(window);
console.log(window.localStorage);
console.log(window.sessionStorage);
// console.log(window);

localStorage.setItem("username", "Raheel");
localStorage.setItem("email", "raheel@gmail.com");

// localStorage.clear();
localStorage.removeItem("username");

sessionStorage.setItem("username", "Rehman");
sessionStorage.setItem("email", "rehman@gmail.com");

// sessionStorage.clear();

sessionStorage.removeItem("email");
