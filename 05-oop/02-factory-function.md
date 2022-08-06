### Factory function 

Factory functions can contain inner values, methods, and many more. They are just like normal functions but with a specific target to create objects. The only difference between a factory function and a normal function is that it returns an object with the assigned values.

```js
function personFactory(name) {
    return {
        name: name,
        talk: function () {
            console.log('My name is ' + name);
        }
    };
}
  
const ahmed = personFactory('Ahmed');
ahmed.talk(); // My name is Ahmed
  
const ali = personFactory('Ali');
ali.talk(); // My name is Ali

console.log(ali.__proto__ === {}.__proto__) // true
```