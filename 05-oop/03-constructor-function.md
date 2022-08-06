
# Constructor funation

```js
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.raise = function(percentage) { 
    this.salary *= 1 + percentage;
}

Employee.prototype.getSalary = function() { 
    console.log(this.salary);;
}

const sam = new Employee('Sam', 1000);

sam.raise(0.2)
sam.getSalary()
```