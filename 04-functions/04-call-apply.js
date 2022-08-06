const wizard = {
    name: 'Merlin',
    health: 100,
    heal: function(num1, num2) {
      this.health += num1 + num2;
    }
}
  
const archer = {
    name: 'Robin Hood',
    health: 50
}
  
wizard.heal.call(archer, 30, 20)
console.log(archer);
wizard.heal.apply(archer, [-10, -20])
console.log(archer);

// bind is unlike call and apply tha immideately runs a function
// bind returns a new function with certain context (this) and parameters

// function borrowing
const healArcher = wizard.heal.bind(archer, 10, 20);
healArcher()
console.log(archer);


// call and apply are usefull for borrowing methods from an object
// bind is usefull for calling function later on with certain context (this)