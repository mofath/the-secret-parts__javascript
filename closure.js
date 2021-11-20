// closure
// in most language onc a function returns, all of its local variables are dealocated
// in javascript, this doesn't have to happen, you can have situations
// where local variables within a function will remain available even after the function has finished executing

// when the function finishes executing, its local memory deleted (except the returned value)

function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const increment_1 = createCounter();
const increment_2 = createCounter();

console.log(increment_1());
console.log(increment_1());
console.log(increment_1());

console.log(`==========`);

console.log(increment_2());
console.log(increment_2());
console.log(increment_2());

// Explaination
// what's special about this situation,
// in most languages, count variable would at that point be deallocated and unavialable
// but in javascript it still there, both the returned function and its immmediate non-local scope are retained,
// even though function has created them is out of call stack
// this is side effect of variable scoping in JS.
// the interpreter will maintain a scope untill it's no longer needed

// Note that the function object referred to by increment
// points to its scope via the internal property [[Scope]].

// a function records the scope it was created in via the internal property [[Scope]].
// Closures: Functions Stay Connected to Their Birth Scopes
// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

// pros
// - you can use them to enforce privacy
// - closure is useful for encapsulating functionality and managing scope
// - many javascript design patterns including the module pattern use closure
// - build itirators, handle partial application and maintain state in an async world

// cons
// - closure require to keep memory allocated for the function and its scope,
// once the closure is no longer needed, all memory may not return to the system
// - one side effect is memory leak

// practical application
// - enables powerful pro-level like once and memorize
// - iterators and generators
// - module pattern,
// - async: callbacks and promises rely only on closure to presist state in an aasync environment

// once is a functrion that can tells other function to run once

// function doesn't remember anything from the previous running, it's created fresh every run
// what if our functions could hold on to live data between execution
// this would let our function have an associated cache/presistent memory
// it all starts with returning a function from another function

// React useState hook as an application of closure

function useState(initialValue) {
  var _val = initialValue;

  function state() {
    return _val;
  }

  function setState(newVal) {
    _val = newVal;
  }

  return [state, setState]; 
}
