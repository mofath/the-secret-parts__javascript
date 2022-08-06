
## **Creating Object**

Object can be created with:
- object literals
- new keyword and 
- Object.create()

---

### **Object Literals**
An object literal is a list of key-valu pairs

```js
var point = {
    x: 0,
    y: 0
}
```

---

### **Creating object with the new keyword**
An object literal is a list of key-valu pairs

```js
const point = new Object({ x: 0, y: 0 })
```

---

### **Using Object.create()**

It creates objects from other existing objects and not directly using the ‘new’ keyword syntax.

```js
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
  
const me = Object.create(person,  { name: { value: 'John' } });
  
me.printIntroduction();
```
---

### Prototype

Every JavaScript object has a second object associated with it. This second object is known as a prototype, and the first object inherits from the second object.

All objects created by object literals have the same prototype object. 

Both objects created by object literals and objects created using the new keyword have the same prototype object.


Object. prototype is one of the rare objects that has no prototype: it does not inherit any properties. 

All of the built-in constructors (and most user-defined constructors) have a prototype that inherits from Object.prototype. For example, Date. prototype inherits properties from Object.prototype.

```js
var point = {
    x: 0,
    y: 0
}

const point2 = new Object({ 
    x: 0, 
    y: 0 
})

console.log(point.__proto__ === point2.__proto__); // true
```