let myPromise = new Promise((resolve, reject) => {
    let success = true;  // change this to false to see the rejection
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result);  // This runs if the promise is fulfilled
    })
    .catch(error => {
      console.log(error);  // This runs if the promise is rejected
    });
  