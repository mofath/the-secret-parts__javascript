// Execution context (scope) is the environment in which a pieced of code is executed and evaluated at.
// environment means variables, objects, and functions a code has access to at a particular time.

// Execution context in JavaScript is of three types as:

// 1- Global execution context (GEC): 
// All of the global code which is not inside any function or object.
// GEC cannot be more than one because only one global environment is possible for JS code execution as the JS engine is single threaded.

// 2- Functional execution context (FEC): Each function has its own execution context. It can be more than one.
// Functional execution context has access to all the code of the global execution context.
// In strict mode, value of this is undefined else it is window object in the function execution context.

// 3- Eval: Execution context inside eval function.

// Execution context stack (ECS): stores all the execution stacks created during the life cycle of the script.
// Global execution context is present by default in execution context stack and it is at the bottom of the stack.

/************************** */
/*    execution context    * /
/************************** */
// JavaScript engine creates the execution context in two stages:

// Creation phase: 
// It is a compilation phase and engine doesn’t execute any code.
// JS engine performs the following task:
//    1 - Creates the Variable object(Activation object)
//        Variable object: is a special object which contain all the variables, function arguments and inner functions declaration information. it is a special object it does not have the dunder proto property.
//    2- Creates the scope chain: 
//        scope chain: is a list of all the variables and objects inside which the current function exists.
//        Scope chain also contains the global execution context and the current function variable object.
//    3- Determines the value of this.

// Variable object or variable object contains the argument object which has details about the arguments of the function.
// Function definitions in the creation phase are stored in heap memory, they are not stored in the execution context stack.
// Function name property points to its definition in the heap memory.

// Execution phase:
// Engine scan code againe and update the variable object with the values of the variables and execute the code.
