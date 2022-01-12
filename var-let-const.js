// Function scope
// When a variable is declared inside a function, it is accessible only within the function

function foo() {
  var x = 'foo';
}

// console.log(x); // Would throw ReferenceError

//------------------------------------------------------------------------------------------//

// Block scope
// variable declared with let or const within block, it is accessible only within the block

if (true) {
  var var_variable = 'var';
  let let_variable = 'let';
  const const_variable = 'const';
}

console.log(var_variable);
// console.log(let_variable); // Would throw ReferenceError
// console.log(const_variable); // Would throw ReferenceError

//------------------------------------------------------------------------------------------//

// Hoisting
// Hoisting means that the interpreter moves the instantiation of an entity to the top of their scope
// and initialized with a value of undefined before code execution.
// That is a function or variable can be used before it has been declared

console.log(greeter);
var greeter = 'say hello';

// Functions are hoisted and initalized with a pointer to the function defination

console.log(foo());
function foo() {
  return 3;
}

// console.log (boo()); // Would throw TypeError: boo is not a function
var boo = () => {
  return 3;
};

//------------------------------------------------------------------------------------------//

// let and var binding

// var have function scope, and only one shared binding for all of loop iterations
// i in every setTimeout callback means the same variable that finally is equal to 6 after the loop iteration ends.
(() => {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
})();

(() => {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
})();

// (() => {
//   for (var i = 0; i <= 5; i++) {
//     ((i) => setTimeout(() => console.log(i), i * 1000))(i);
//   }
// })();

// (function timer() {
//   var _loop = function (i) {
//     setTimeout(function clog() {
//       console.log(i);
//     }, i * 1000);
//   };

//   for (var i = 0; i <= 5; i++) {
//     _loop(i);
//   }
// })();
