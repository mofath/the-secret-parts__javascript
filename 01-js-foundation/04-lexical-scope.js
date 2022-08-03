/************************** */
/*    Lexical Scope        * /
/************************** */
// Lexical scope (sope where function is defined) determines available variables, 
// not where the function is called

var a = 'a';

first();

function first() {
  var b = 'b'; 

  console.log(a + b);

  second() 

  function second() {
    var c = 'c'; 
    console.log(a + b + c);
    third();
  }
}

// third is defined in global scope, hence it has access to the global scope
function third() {
  var d = 'd'; 
  console.log(a + d);
}

