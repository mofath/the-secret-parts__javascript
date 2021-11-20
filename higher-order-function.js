// Suppose we have a function copyArrayAndMultiplyBy2

function copyArrayAndMultiplyBy2(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) output.push(arr[i] * 2);

  return output;
}

function copyArrayAndDivideBy2(arr) {
  return;
}

function copyArrayAndAdd2(arr) {
  return;
}

// we are breaking not DRY principle
// everytime we creating output array, iterating over input array and do something

// we could leave a placeholder for functionality and pass functionality as a parameter
// we could pass a callback function

function copyArrayAndManipulate(arr, callback) {
  const output = [];

  for (let i = 0; i < arr.length; i++) output.push(callback(arr[i]));

  return output;
}

const multiplyBy2 = (num) => num * 2;

// Example
const arr = [1, 2, 3];

console.log(copyArrayAndMultiplyBy2(arr));
console.log(copyArrayAndManipulate(arr, multiplyBy2));

// we can even pass in our callback directely without a name
// result  = copyArrayAndManipulate(arr, input => input * 2 );
