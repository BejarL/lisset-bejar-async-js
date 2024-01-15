// You can create a web worker using the following syntax:

// const worker = new Worker("<worker_file>.js");

// A thread is created once a Worker call is initiated. This thread only communicates 
// with its creator, that is the file which created this thread.

// A worker can be shared or used by multiple consumers/scripts. These are called shared workers. The syntax of the shared worker is very similar to that of the above mentioned workers.

const worker = new SharedWorker("<worker_file>.js");

// You can create a simple web socket like below:

const socket = new WebSocket("ws://example.com");