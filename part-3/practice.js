let promise = Promise.all(iterable);

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));

  let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));
  // If any of the promises is rejected, the promise returned by

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!


// There are 6 static methods of Promise class:

// Promise.all(promises) – waits for all promises to resolve and returns an array of their results. 
// If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
// Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results 
// as an array of objects with:
// status: "fulfilled" or "rejected"
// value (if fulfilled) or reason (if rejected).
// Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
// Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. 
// If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
// Promise.resolve(value) – makes a resolved promise with the given value.
// Promise.reject(error) – makes a rejected promise with the given error.
// Of all these, Promise.all is probably the most common in practice.