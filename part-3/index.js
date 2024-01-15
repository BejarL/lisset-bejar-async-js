
// In this example we'll implement a promise-based alarm API, called alarm(). 
// It will take as arguments the name of the person to wake up and a delay in milliseconds 
// to wait before waking the person up. After the delay, the function will send a "Wake up!" message, 
// including the name of the person we need to wake up.

// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// The setTimeout() API takes as arguments a callback function and a delay, given in milliseconds. 
// When setTimeout() is called, it starts a timer set to the given delay, and when the time expires, 
// it calls the given function.

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);

// The Promise() constructor

// The key component here is the Promise() constructor. The Promise() constructor takes a single function
//  as an argument. We'll call this function the executor. When you create a new promise you supply the 
// implementation of the executor.

// This function creates and returns a new Promise.
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

// Using the alarm() API

// We can call alarm(), and on the returned promise call then() and catch() to set handlers for promise 
// fulfillment and rejection.

// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener("click", () => {
//   alarm(name.value, delay.value)
//     .then((message) => (output.textContent = message))
//     .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
// });

// Using async and await with the alarm() API

// Since alarm() returns a Promise, we can do everything with it that we could do with any other promise: 
// promise chaining, Promise.all(), and async / await:

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});