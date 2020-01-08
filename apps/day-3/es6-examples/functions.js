// 1. function statement es5
// function sum(a, b) {
//   return a + b;
// }

// 2. function expression (anonymous function) es5
// const sum = function (a, b) {
//   return a + b;
// };

// 3. arrow function ES6
// const sum = (a, b) => {
//   return a + b;
// };

// 4. arrow function ES6
const sum = (a, b) => a + b;

// 5. arrow function ES6
const double = n => n * 2;

const result = sum(10, 20);
console.log('result:', result);

console.log('double result:', double(10));