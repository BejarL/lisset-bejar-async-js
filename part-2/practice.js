function checkUserRegistered(username) {
  return new Promise((resolve, reject) => {
      // Simulating a database check with a timeout
      setTimeout(() => {
          // Database logic would go here
          // For demonstration, let's assume the user 'Alice' is registered, and others are not
          if (username === 'Alice') {
              resolve('User is registered.');
          } else {
              reject('User is not registered.');
          }
      }, 2000); // Simulate a database operation taking 2 seconds
  });
}

// Using the Promise
checkUserRegistered('Alice')
  .then((message) => {
      console.log(message); // This will run if the user is registered
  })
  .catch((error) => {
      console.log(error); // This will run if the user is not registered
  });

checkUserRegistered('Bob')
  .then((message) => {
      console.log(message);
  })
  .catch((error) => {
      console.log(error);
  });

//Creating the Promise: The checkUserRegistered function returns a new Promise. The Promise constructor takes a function that has two parameters: resolve and reject. 
// These are functions themselves, and are used to determine the outcome of the Promise.
// Resolving or Rejecting the Promise: Inside the setTimeout, we simulate a check against a database. If the username is 'Alice', we call resolve with a success message. 
// For any other username, we call reject with an error message.
// Using the Promise: When we call checkUserRegistered, we chain it with .then() and .catch() methods. .then() is used for handling the case where the Promise is resolved 
// (user is found), and .catch() is for handling the case where the Promise is rejected (user is not found).