# Functions

 Functions are blocks of code that can be saved and run repeatedly. 



 ### Creating a function

1. Start with the keyword function and then name the function.
2. Set of parentheses, then a set of curly braces. Inside the curly braces will be the code you want to run, also known as the function body.
```
function helloWorld() {
  // Add whatever code you want to run here
  console.log("Hello, world!");
}
```

******To call this function, also called invoking a function, you would write:

helloWorld();



When you create a function and put something inside the parentheses, this value is called a parameter.
```
function helloPerson(name) {
  console.log(`Hello, ${name}!`);
}
```
When you invoke the function, you must pass an argument inside the parentheses for the function to use the value:
```
helloPerson("Cameron");
// "Hello, Cameron!"
```


Functions are also able to return values

```
function square(x) {
  return x * x;
}
```

### Default parameters
```
function greeting(salutation = "Hello") {
  console.log(`${salutation}, world!`);
}
```

```
greeting();
// "Hello, world!"
greeting("Howdy");
// "Howdy, world!"
```

### Other ways to write functions
Function expression
```
const myFunc = function () {
  console.log("This is my new function.");
};

myFunc();
```
Arrow function
```
const myArrowFunc = () => {
  console.log("This is my new arrow function.");
};

myArrowFunc();
```


### Calling functions within functions
```
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {
  if (operator === "add") {
    return add(num1, num2);
  } else if (operator === "subtract") {
    return subtract(num1, num2);
  } else if (operator === "multiply") {
    return multiply(num1, num2);
  } else if (operator === "divide") {
    return divide(num1, num2);
  } else {
    return `Something went wrong`;
  }
}
console.log(calculator(1, 1, "add"));
console.log(calculator(2, 1, "subtract"));
console.log(calculator(3, 4, "multiply"));
console.log(calculator(5, 2, "divide"));
```



Lesson link[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/functions/readme.md]