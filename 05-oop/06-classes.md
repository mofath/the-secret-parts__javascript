### Classes


```js
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    raiseSalary(percentage) {
        this.salary *= 1 + percentage;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const employee = new Employee("Ahmed", 1000);
console.log(employee.name); // Ahmed // involing getter method
```