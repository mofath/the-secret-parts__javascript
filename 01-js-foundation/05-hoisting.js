// Hoisting
// Hoisting means that the interpreter moves the instantiation 
// of an entity to the top of their scope
// and initialized with a value of undefined before code execution.
// That means a function or variable can be used before it has been declared

// Functions are hoisted and initalized with a pointer to the function defination

// ================================================================= //
// Eample 1
// --------

calcAge(1993);

console.log(greeter);

function calcAge(year) {
  console.log(2019 - year);
}

var greeter = 'say hello';

console.log('------------------------');
// ================================================================= //
// Eample 2
// --------

var num1 = 1;
var num2 = 2;

function func1() {
  // Here the engine creates new execution context for foo
  // and declare num1 as undefined in the creation phase
  console.log(num1); // undefined
  console.log(num2); // 2

  var num1 = 10;
  console.log(num1); // 10
}

func1();

console.log('------------------------');
// ================================================================= //
// Eample 3
// --------

// func2() // Would throw TypeError: func2 is not a function
var func2 = () => {
  return 3;
};