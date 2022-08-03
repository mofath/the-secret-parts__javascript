// JS and Memory

// Heap: 
// is used to store any type of an arbitary data (i.e variables) in no order
// stores objects. Because everything in JavaScript is an object this means all dynamic data like arrays, closures, etc. 
//  The heap is the biggest block of memory, it’s where Garbage Collection (GC) happens.

// Call stack:  
// stores functions and variables as code executes
// to keep track of what's happening line by line
// stores static data, function frames, primitive values, and pointers to stored objects. 
// The stack is managed by the operating system.

// Stack Overflow
// is when the maximum number of call stacks of the program exceeds
// the limited amount of address space (memory).

// Garbage collector
// it's job is to reclaim memory occupied by unused objects (garbage).
// Garbage collector in JavaScript uses Mark-and-sweep technique
// Garbage collection frees up memory in the Heap used by objects that are no longer referenced from the Stack, either directly or indirectly. The goal is to create free space for creating new objects. Garbage collection is generational. Objects in the Heap are grouped by age and cleared at different stages.


// Memory Leaks:
// Memory leaks can be defined as memory that is not required by an application anymore
// that for some reason is not returned to the operating system or the pool of free memory.

// Memory Leaks Types

// Infinite loop
// keep allocating memory in the heap without freeing it
// objects (array) are stored in the heap area.
let arr = [];
for (let i = 5; i > 1; i++) {
  arr.push(i - 1);
}

// Creating large number of global variables (objects or unsuspected globals /dynamic memory) .
// Global variable's scope never ends, therefore they can't be removed by GC
// and hence remain in memory throughout the execution of the program
var object1 = {};
var object2 = {};

// You could dereference the objects manually
// therefore garbage collection deletes objects that are not referenced by any variables.
object1 = null;
object2 = null;
// If you must use a global variable to store lots of data, 
// make sure to null it or reassign it after you are done with it.


// Dangling timers or callbacks
// Having a timer referencing some object in the callback is the most common way
// of preventing the object from being garbage collected.

// Event listeners 
// Active event listener will prevent all variables captured in its scope from being garbage collected.
// How to prevent it: We should always unregister the event listener once no longer needed,
// by creating a reference pointing to it and passing it to removeEventListener().


// How to Avoid Memory Leaks in Node.js Applications: Prevention Best Practices
// - Reduce Use of Global Variables
// - Reduce Use of Global Variables
// - Use Stack Memory Effectively
//    . First, avoid heap object references from stack variables when possible. 
//    . Secondly, delete unused variables. 
//    . Third, destructure objects and use only the fields you need from an object or array rather than passing around entire objects or arrays to functions, closures, timers, and event handlers.