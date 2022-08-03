// var vs let / const
// ------------------------

// const and let have block scope
// When a variable is declared inside a function, it is accessible only within the function

// var has function scope
// When variable declared with let or const within block, it is accessible only within the block

if( 5 > 4) {
  var a = 'aaaa'
  let b = 'bbbb'
  const c = 'cccc'
}

console.log(a); 
// console.log(b); // Would throw ReferenceError
// console.log(c); // Would throw ReferenceError

(() => {
  for (var i = 0; i <= 5; i++) {
    //
  }

  console.log('final', i); // final 6
})();

(() => {
  for (let i = 0; i <= 5; i++) {
    //
  }
  
  // console.log('final', i); // ReferenceError: i is not defined
})();

console.log('------------------------');
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
// output: 0 1 2 3 4 5


// (() => {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// })();
// output: 6 6 6 6 6 6


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
// output: 0 1 2 3 4 5
