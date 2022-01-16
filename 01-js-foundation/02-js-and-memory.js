// JS and Memory
// We need a place to store and write variables and data (Heap)
// And we need a place to run and keep track of what's happening line by line (Stack)

// Heap: is used to store any type of an arbitary data in no order
// Call stack:  stores functions and variables as code executes

// Stack Overflow
// is when the maximum number of call stacks of the program exceeds
// the limited amount of address space (memory).

// Garbage collector
// it's job is to reclaim memory occupied by unused objects (garbage).
// Garbage collector in JavaScript uses Mark-and-sweep technique

// Memory Leaks:
// Memory leaks can be defined as memory that is not required by an application anymore
// that for some reason is not returned to the operating system or the pool of free memory.

// Memory Leaks Types

// Infinite loop
let arr = [];
for (let i = 5; i > 1; i++) {
  arr.push(i - 1);
}

// Creating large number of global variables (objects/dynamic memory).
// Global variable's scope never ends, therefore they can't be removed by GC
// and hence remain in memory throughout the execution of the program even if they are not needed.
var object1 = {};
var object2 = {};

// You could dereference the objects manually
// therefore garbage collection deletes objects that are not referenced by any variables.
object1 = null;
object2 = null;


// Dangling timers or callbacks
// Having a timer referencing some object in the callback is the most common way
// of preventing the object from being garbage collected.

// Event listeners 
// Active event listener will prevent all variables captured in its scope from being garbage collected.
// How to prevent it: We should always unregister the event listener once no longer needed, by creating a reference pointing to it and passing it to removeEventListener().
