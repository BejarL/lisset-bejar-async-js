//Synchronous programming
// The browser waits for the first line to finish before moving onto the next line

// function makeGreeting(name) {
//   return `Hello, my name is ${name}!`;
// }

// const name = "Miriam"; // Declares a string called "name"
// const greeting = `Hello, my name is ${name}!`; // Declares another string called "greeting" and uses "name"
// console.log(greeting); // Outputs "greeting" in the console
// // "Hello, my name is Miriam!"



// A long-running synchronous function:
// This is a very inefficient algorithm that takes too long and even longer as the number input gets larger
// const MAX_PRIME = 1000000;

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n > 1;
// }

// const random = (max) => Math.floor(Math.random() * max);

// function generatePrimes(quota) {
//   const primes = [];
//   while (primes.length < quota) {
//     const candidate = random(MAX_PRIME);
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//     }
//   }
//   return primes;
// }

// const quota = document.querySelector("#quota");
// const output = document.querySelector("#output");

// document.querySelector("#generate").addEventListener("click", () => {
//   const primes = generatePrimes(quota.value);
//   output.textContent = `Finished generating ${quota.value} primes!`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   document.location.reload();
// });



// Event handlers are a form of asynchronous programming
// const log = document.querySelector(".event-log");

// document.querySelector("#xhr").addEventListener("click", () => {
//   log.textContent = "";

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("loadend", () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//   });

//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
//   );
//   xhr.send();
//   log.textContent = `${log.textContent}Started XHR request\n`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   log.textContent = "";
//   document.location.reload();
// });



// Callbacks are functions that pass into other functions to be called at the right time. 
// An event handler is a type of callback

// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();