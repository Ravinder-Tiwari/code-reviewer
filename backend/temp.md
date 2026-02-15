
Your current function will throw a ReferenceError unless a and b are defined globally. To make this function useful and reusable, you should pass a and b as parameters.

1. Standard Function (Recommended)

This is the most common way to write it. It takes two inputs and returns their sum.

function sum(a, b) {
  return a + b;
}

// Usage:
console.log(sum(5, 10)); // Output: 15

2. Arrow Function (Modern ES6+)

A more concise way to write the same function, often used in modern JavaScript development.

const sum = (a, b) => a + b;

// Usage:
console.log(sum(5, 10)); // Output: 15

3. Handling Missing Numbers (Default Parameters)

If you want to prevent errors in case one of the numbers isn't provided, you can set default values to 0.

function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(5)); // Output: 5 (instead of NaN)

Why your original code might fail:
function sum() { 
  return a + b; 
}


If you run sum(), the computer looks for variables named a and b. If they haven't been defined outside the function, the program will crash with:

Uncaught ReferenceError: a is not defined