
// Function binding
// -----------------------------------
// When passing object methods as callbacks, for instance to setTimeout,
// there’s a known problem: "losing this" => losing context

let user = {
    name: "John",
    sayMyName() {
        console.log(`Hello, ${this.name}!`);
    }
};

setTimeout(user.sayMyName, 1000); // Hello, undefined!

// # solution 1: a wrapper
// -----------------------
setTimeout(() => {
    user.sayMyName();
}, 1000); // Hello, John!

// Looks fine, but what if before setTimeout triggers user changes value, 
// Then, suddenly, it will call the wrong data!


// # Solution 2: bind
// -----------------------
// using bind
let boundSayMeName = user.sayMyName.bind(user);
setTimeout(boundSayMeName, 1000); // Hello, John!

// ------------------------------------------------------------
// Partial functions (currying)
// -----------------------
// We can bind not only this, but also arguments. 

// Let’s use bind to create a function on a base of another function:

function mul(a, b) {
    return a * b;
}
  
let double = mul.bind(null, 2);

console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log( double(5) ); // = mul(2, 5) = 10

// ------------------------------------------------------------

// A function cannot be re-bound.
// --------------------------
// The exotic bound function object returned by f.bind(...) remembers the context (and arguments if provided) only at creation time.
function f() {
    alert(this.name);
}
  
f = f.bind( {name: "John"} ).bind( {name: "Pete"} );
  
f(); // John