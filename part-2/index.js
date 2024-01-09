// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

// Chaining promises
//returns a promise, which will be completed with the result of the function passed to it and rewrite the code

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

  // Before we must check the status of the code

  // const fetchPromise = fetch(
  //   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  // );
  
  // fetchPromise
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data[0].name);
  //   });


  // Catching errors
  // Error handling can get very difficult with nested callbacks, 
  // making us handle errors at every nesting level.

  // If you add catch() to the end of a promise chain, then it will 
  // be called when any of the asynchronous function calls fail.


// This logs the error
  // const fetchPromise = fetch(
  //   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  // );
  
  // fetchPromise
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data[0].name);
  //   })
  //   .catch((error) => {
  //     console.error(`Could not get products: ${error}`);
  //   });


  // Promise terminology

  // pending: the promise has been created, and the asynchronous 
  // function it's associated with has not succeeded or failed yet.
  // fulfilled: the asynchronous function has succeeded. When a promise 
  // is fulfilled, its then() handler is called.
  // rejected: the asynchronous function has failed. When a promise is rejected, 
  // its catch() handler is called.


  // Combining multiple promises

  // Combine asynchronous function calls, and the Promise API provides some helpers for them.

  // const fetchPromise1 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  // );
  // const fetchPromise2 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  // );
  // const fetchPromise3 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  // );
  
  // Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  //   .then((responses) => {
  //     for (const response of responses) {
  //       console.log(`${response.url}: ${response.status}`);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(`Failed to fetch: ${error}`);
  //   });

  //  Badly formed URL

  // const fetchPromise1 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  // );
  // const fetchPromise2 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  // );
  // const fetchPromise3 = fetch(
  //   "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  // );
  
  // Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  //   .then((responses) => {
  //     for (const response of responses) {
  //       console.log(`${response.url}: ${response.status}`);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(`Failed to fetch: ${error}`);
  //   });

    // Console: Failed to fetch: TypeError: Failed to fetch

// Promise.any(): any one of a set of promises to be fulfilled, and don't care which one

// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
// );

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });

// async and await
// Adding async at the start of a function makes it an async function
// Inside an async function, you can use the await keyword before a call 
// to a function that returns a promise.
// You can only use await inside an async function

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));

// Promises in JavaScript are essential for managing asynchronous operations. They provide a cleaner, more readable way to handle 
// asynchronous tasks compared to the older callback approach. By using promises, developers can avoid the so-called "callback hell," 
// where multiple nested callbacks make the code difficult to read and maintain.
// A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. Essentially, 
// it's a placeholder for a value that will be known later, either a result of the operation or an error.