// Example of setInterval
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log('This message appears every second', count);
  if (count >= 5) {
    clearInterval(intervalId);  // Stops the interval after 5 iterations
  }
}, 1000);