// Js Engine 
// it takes a JS file and transate into machine code the computer can run
// The first JS Engine is the engine made by JS creator Brendan Eich, Spider Monkey and it is still used by FireFox
// In 2008, Google introduced a new engine V8

//  JS Engin components
// Parser (AST) => Interpreter/Compiler => Machine code

// Parser: it does something called lexical analysis, which breaks the code into something called tokens
// And this token is formed into what is calles AST (Abstract Syntax Tree)


// Interpreter vs Compiler
// In programming there are two ways to translate our code to machine language
// Interpreter and Compiler

// Interpreter:
// It converts program statements, line by line, into machine code.
// It usually takes less amount of time to analyze the source code, as it runs line by line. 
// The overall execution time is comparatively slower, as analysis takes place every time the program is run.

// Compiler: 
// Scans the entire program and translates it as a whole into an executable code.
// it usually takes a large amount of time to analyze the source code
// The overall execution time is comparatively faster than interpreters
// The executable code will be in machine-specific binary code. 
// Total run time is more and occupies a large part of the memory. 


// Is JavaScript an interpreted language?
// Yes, initially when JavaSript frist came out, JavaScript engine like SpiderMonkey interpreted JavaScript
// But things have evolved now we don't have interprters we also use compilers to optimize code
// It actually depends on the implementation, you could have JavaScript engine 
// that is based on interpeter or engine that is based compiler
