### Closure

In most language onc a function returns, all of its local variables are dealocated in javascript, this doesn't have to happen, you can have situations where local variables within a function will remain available even after the function has finished executing

when the function finishes executing, its local memory deleted (except the returned value)

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const increment = createCounter();

console.log(increment()); 1
console.log(increment()); 2
console.log(increment()); 3
```

#### Explaination
In most languages, count variable would at that point be deallocated and unavialable but in javascript it still there, both the returned function and its immmediate non-local scope are retained, even though function has created them is out of call stack this is side effect of variable scoping in JS. The interpreter will maintain a scope untill it's no longer needed


---
**NOTE**

Closure: is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

A function records the scope (Birth Scopes) it was created in via the internal property [[Scope]].

Any inner function closes over outer function variables.

JS engine will not let GC dealocate any local variable that is still refrenced by child function.

---

Befor we run a piece of code, JS construct the scope chain and store it in heap, not the call stack, and keep any local variable that is still refrenced by any child function, untill it is not needed anymore.

#### Practical application
- Closure is useful for encapsulating functionality and managing scope.
- Enables powerful pro-level like once and memorize
- Build iterators and generators
- Many javascript design patterns including the module pattern use closure.
- Callbacks and promises rely only on closure to presist state in an aasync environment
- Maintain state in an async world
- Handle partial application.

##### Disadvantages
- Closure require to keep memory allocated for the function and its scope, once the closure is no longer needed, all memory may not return to the system
- One side effect is memory leak


Once is a functrion that can tells other function to run once

Function doesn't remember anything from the previous running, it's created fresh every run what if our functions could hold on to live data between execution this would let our function have an associated cache/presistent memory it all starts with returning a function from another function


React useState hook as an application of closure

```js
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
```
