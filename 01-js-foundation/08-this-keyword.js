/************************** */
/*      This Keyword       * /
/************************** */
// “This” keyword refers to an object that is executing the current piece of code.

// In a Regular function call: the "this" points to the global object
// In Method call: the "this" points to the object that is calling the method

// the "this" keyword is not assigned a value untill a function where it is defined is called
var val = 10

function printVal (arg) {
    // this => global
    console.log(arg);
}

var obj = {
    val: 20,
    val2: 30,

    regularMethod : function () {
        // this => obj
        printVal(val) // 10
        printVal(this.val) // 20

        function inner() {
            // this => this // as it is a regular function
            // and it does not need object to be called (obj.inner)
            printVal(this.val) // 10
        }
        // inner();
    },

    arrowMethod :  () => {
        // Arrow functions do not have their own this
        // this => {}
        printVal(val) // 10
        // printVal(val2) // error
        printVal(this.val) // undefined
    },

    regularFunc: printVal(val), // 10 // reqular function refrence global
}

console.log('----------------------------');

/************************** */
/*      Arrow functions      * /
/************************** */

// Arrow functions don't have their own bindings to this, super, and should not be used as methods.
// Arrow functions don't have access to the new.target keyword.
// Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions cannot use yield, within its body.

// "this" keyword inside an arrow function doesn’t get rebound.


// Arrow Functions as Object Methods
// -----------------------------------
const obj2 = { // does not create a new scope
    i: 10,
    arrowMethod: () => {
        console.log(this) // {} or global
    },
    regularMethod: function()  {
        console.log(this) // obj2
    }, 
}

// Arrow Functions as event handlers
// -----------------------------------
// don't use an arrow function with DOM eventListener, callbacks,
// because it will not references the DOM element to which the listener has been attached


// btn.addEventListener('click', function() {
//     console.log(this)   // will reference the btn
// })

// btn.addEventListener('click', () => {
//      console.log(this)  // will reference "Window" object
// })

// Arrow Functions Have No arguments Object
// -----------------------------------
// arguments object: is an array-like object 
// that stores the values passed to the function when called.

// When you use an arrow function, the value of the this keyword doesn’t get rebound. 
// It’s inherited from the parent scope (this is called lexical scoping). 
// In this particular case, the arrow function is in the global scope. 
// Consequently, the this inside the function handler is also bound to the global scope — that is, to the Window object.

// Arrow Functions with classes
// -----------------------------------
// Because a class's body has a this context,
// arrow functions as class fields close over the class's this context 
// and the this inside the arrow function's body will correctly point to the instance 
// or the class itself, for static fields. However, 
// because it is a closure, not the function's own binding,
// the value of this will not change based on the execution context.

class C {
    val = 40;

    autoBoundMethod = () => {
      console.log(this.val); // 40
    }

    method() {
        console.log(this.val);
    }
}


const c = new C();
c.method();