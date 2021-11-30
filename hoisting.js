calcAge(1993);

function calcAge(year) {
  console.log(2019 - year);
}

// ================================================================= //

try {
  retire(1993); // Cannot access 'retire' before initialization
} catch (error) {
  console.log(error.message);
}

const retire = function (year) {
  console.log(60 - (2019 - year));
};

// ================================================================= //

console.log(age); // undefined

var age = 26;

function test() {
  console.log(age); // undefined
  console.log(1111);
  // console.log(window.age); // 26
  var age = 55;
  console.log(age); // 55
}

test();

// ================================================================= //

// scope chain
function retireAge(year) {
  function calcAge() {
    return 2019 - year;
  }

  var age = calcAge();

  return console.log(60 - age);
}

retireAge(1993);
// ================================================================= //

console.log('=======================================================');

var a = 'ahmed';

function first() {
  var b = 'good';
  second();

  function second() {
    var c = 'morning';

    console.log(a + ', ' + b + ' ' + c);

    third();
  }
}

function third() {
  var d = 'bye';

  console.log(a + ', ' + d);
  // console.log(d + ' ' + c); // reference error
}

first();
