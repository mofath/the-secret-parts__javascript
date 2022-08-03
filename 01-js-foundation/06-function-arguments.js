//arguments
function marry(person1, person2) {
    console.log(arguments)
    console.log(Array.from(arguments))
}
  
marry('one', 'two')
  
function marry2(...args) {
    console.log(args)
    console.log(Array.from(arguments))
}
  
marry2('Tim', 'Tina')