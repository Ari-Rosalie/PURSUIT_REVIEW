# Scope

Scope refers to a section of code. There are four types of scope
1. Global
2.Block
3.Function
4. Module

### Global Scope
Global scope refers to code that can be called from anywhere, it is not limited/confined to a section. It is important to remeber when working on bigger projects global scopes should be limited to avoid errors as overriding previous variables.


### Block Scope
Block scope refers to the area within your code where variables declared using let and const are accessible. This scope is confined to the block in which the variables are defined, typically denoted by curly braces {}. Blocks can be found in structures like if statements, loops, and functions.

```
if (condition) {
  // Block
}

for (let i = 0; i < 5; i++) {
  // Block
}

{
  // Standalone block
}
```


### Function Scope
Function scope refers to the accessibility of variables, parameters, and functions defined within a function. These entities are only accessible inside the function where they are declared and are not visible outside of it.
```
function greet() {
  let message = "Hello!";
  console.log(message); // Outputs: Hello!
}

greet();
console.log(message); // ReferenceError: message is not defined
```

### Module scope
Module scope refers to the context in which variables, functions, and classes are accessible within a module. Introduced with ES6 (ECMAScript 2015), modules allow developers to encapsulate code, promoting better organization and preventing unintended interactions between different parts of a program

#### Understanding Module Scope
When you define a JavaScript file as a module (typically by using the type="module" attribute in a <script> tag or by using the .mjs file extension), all top-level declarations within that file are scoped to the module. This means:​

Isolation: Variables and functions declared in a module are not accessible in the global scope or other modules unless explicitly exported.​
Stack Overflow.


Encapsulation: Modules help in encapsulating functionality, reducing the risk of name collisions and unintended side effects.​

Explicit Sharing: To share code between modules, you must explicitly export and import the desired bindings.


#### Exporting and Importing in Modules
To make parts of a module accessible to other modules, you use the export keyword. Conversely, to use exported bindings from another module, you use the import keyword.

// Exporting functions
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}



Lesson link [https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/scope/readme.md]