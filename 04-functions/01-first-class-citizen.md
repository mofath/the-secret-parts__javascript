### Functions as First-Class Objects

Functions in JavaScript are first-class objects (or “first-class citizens”).

What does first-class citizenship mean in general?

First-class citizenship, within the world of programming, means that a given entity supports all the operational properties inherent to other entities; properties such as being able to **be assigned to a variable**, **passed around as a function argument**, **returned from a function**, etc. Basically, first-class citizenship simply means “being able to do what everyone else can do.”

In JavaScript, functions are objects (hence the designation of first-class object). They inherit from the Object prototype and they can be assigned key: value pairs.

Functions as first-class objects introduces JavaSript to a whole new world called functional programming.

Additionally, listening for and handling multiple events by passing callback functions is a useful feature within JavaScript and is achieved by passing a function as an argument to the document object’s addEventListener method. Furthermore, the practices of closure and partial-application/currying would not be possible within JavaScript if functions didn’t enjoy the status of first-class.