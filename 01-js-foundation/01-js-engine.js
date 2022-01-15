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

// compiler use multiple techiniques to optimize code include:
// - inline caching
// - hidden classes

// Why not compile JavaScript? 
// Most of the major implementations (v8, SpiderMonkey, etc) include what’s called a “just-in-time compiler”. 
// These compile some (or all) of the script in order to achieve better performance.
// The usual strategy is that it tries to identify the functions that are being executed frequently and compiles those. 
/// Over a relatively short period of time, most of the performance-sensitive code 
// ends up being run as if it were compiled code, rather than strictly interpreted.
// As this just-in-time compiler technology improves, the lines between “compiled” and “interpreted” start to blur.

// Why not use machine code from the beginning?
// - This needs the compilation needs to be done on the server 
// - and browsers needs to agree on an executable format to run JavaScript, back in the day it was not feasible to acheive that
// - but luckily enough, we have a standrd web executable binary form, WebAssembly, what we didn't have in 1985


