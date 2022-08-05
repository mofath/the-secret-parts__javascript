Suppose we have a function copyArrayAndMultiplyBy2

```js
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
```

We are breaking DRY principle, everytime we creating output array, iterating over input array and do something

We could leave a placeholder for functionality and pass functionality as a parameter (callback function)

```js
function copyArrayAndManipulate(arr, callback) {
  const output = [];

  for (let i = 0; i < arr.length; i++) output.push(callback(arr[i]));

  return output;
}

const multiplyBy2 = (num) => num * 2;

const arr = [1, 2, 3];

console.log(copyArrayAndManipulate(arr, multiplyBy2));

// we can even pass in our callback directely without a name
const result  = copyArrayAndManipulate(arr, input => input * 2 );
```

Another Example
```js
function retirement(limit) {
  var str = ' year untill retirement.';
  return function (year) {
    console.log(limit - (2019 - year));
  };
}

var retirementEG = retirement(60);
retirementEG(1993)