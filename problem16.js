// Problem:

// Write a JavaScript function to calculate the factorial of a number.

function factorial(n) {
    if (n === 0) {
      return 1;
    } else if (n < 0) {
      return undefined;
    } else {
      return n * factorial(n - 1);
    }
  }
  


console.log(factorial(5)) // 120
factorial(0) // 1
factorial(-1) // undefined
