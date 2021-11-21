// A pure function must comply with the following two statements:
// - it cannot have unforseen side effects
// - it can only depends on its own parameter for its internal

var sum = 0;

function impureSum(a, b) {
  sum = a + b; // has side effect, mutate external data
  return sum;
}

function pureSum(a, b) {
  const sum = a + b;
  return sum;
}

const mult = 2;
function impureMult(a) {
  return a * mult; // unwanted external dependency
}

function pureMult(a) {
  const mult = 2;
  return a * mult;
}
