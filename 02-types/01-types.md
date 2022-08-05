***Primitive*** 
---------------------
An address in memeory of the variable directly contains the value
1. number
2. string
3. boolean
4. undefined
5. symbol
6. null

***Non-Primitive*** 
---------------------
An address in memeory of the variable contains a pointer to the varible address in the memory
1. object   => typeof results object
2. array    => typeof results object
3. function => typeof results function

***Standard objects***
---------------------
1. infinity
2. NaN
3. null
4. globalThis

---
**NOTE**

**undefined** indicates that the variable has not been assigned a value or not declared at all.

**null** represents the absence of any object value. 

---

Wrapper objects
---------------------
When we treat a primitive value like it was an object (i.e. by accessing properties and methods), JavaScript creates, under the hood, a wrapper to wrap this value and expose it as an object. The JS engine never reuses a wrapper object, giving them to the garbage collector right after a single use.

Wrapper objects for number values are instances of Number, string values are wrapped by instances of String the type for a boolean’s wrapper is Boolean.

wrapper objects’ instantiation is done on-the-fly by JavaScript’s engine, boxing primitive values in temporary objects.  However, it’s possible to instantiate a wrapper object explicitly and,  this way, make it behave like a regular object, preventing its automatic disposal.

```js
const quote = new String('My precious');

quote.character = 'Gollum';

quote.showQuote = function() {
  console.log(`'${this}' is a quote from '${this.character}'.`);
};

quote.showQuote(); //=> "'My precious' is a quote from 'Gollum'."
```

Once you instantiate a wrapper object by using a constructor and initialize a variable with it,
what is actually being assigned is not the primitive value anymore, but a reference to the object itself.

Each wrapper object will have a different reference. Therefore, if you compare a wrapped value to its equivalent primitive, they will differ:

```js
console.log(new String('some string') === 'some string'); //false
```



