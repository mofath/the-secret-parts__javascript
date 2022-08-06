
Array.map() => to print '🗺'

```js
Array.prototype.map = function()  { \
  arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i]+'🗺'));
  }
  return arr;
}
console.log([1,2,3].map())

```
Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.

```js
Date.prototype.lastYear = function(){
  return this.getFullYear() - 1;
}

new Date('1900-10-10').lastYear()
```

How would you be able to create your own .bind() method using call or apply.

```js
Function.prototype.bind = function(whoIsCallingMe){
  const self = this;
  return function(){
    return self.apply(whoIsCallingMe, arguments);
  };
}

const 
```