// Workers give you the ability to run some tasks in a different thread, 
// so you can start the task, then continue with other processing (such as handling user actions).
// One concern from all this is that if multiple threads can have access to the same shared data, 
// it's possible for them to change it independently and unexpectedly

// There are three different sorts of workers:
// dedicated workers
// shared workers
// service workers


// Using web workers

// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});


// Conclusion
// Introduced web workers, which enable a web application to offload tasks to a 
// separate thread. The main thread and the worker don't directly share any variables, but communicate by 
// sending messages, which are received by the other side as message events.

// Workers can be an effective way to keep the main application responsive, although they can't access all
// the APIs that the main application can, and in particular can't access the DOM.