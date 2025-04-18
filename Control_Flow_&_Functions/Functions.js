// Write a function called greetUser that logs "Welcome to our website!".
function greetUser(){
    console.log("Welcome to our website!");
}
// Write a function called sayHello that takes a name and logs "Hello, [name]!".
function sayHello(name){
    console.log(`Hello, ${name}!`);
}
// Write a function doubleNumber that returns the double of a number.
function doubleNumber(num){
    return num * 2;
}

// Create a function isEven that returns true if a number is even, otherwise false.
function isEven(num){
    return num % 2 === 0;
}

// Write a function called calculateArea that takes width and height and returns the area of a rectangle.
function calculateArea(l,w){
    return l * w;
}

// Create a function toUpperCaseWord that takes a string and returns it in all uppercase letters.
function toUpperCaseWord(word){
    return word.toUpperCase();
}

// Write a function called introduce that takes a first and last name and logs "Hi, my name is [first] [last]".
function introduce(first,last){
    console.log(`Hi, my name is ${first} ${last}`);
}

// Write a function addThreeNumbers that takes three numbers and returns their total.
function addThreeNumbers(a,b,c){
    return a + b + c;
}
// Write a function greetingTimeOfDay that takes a name and time (e.g., "morning") and logs a personalized greeting.
function greetingTimeOfDay(name, time){
    console.log(`Good ${time}, ${name}!`);
}

// Write a function isTeenager that returns true if an age is between 13 and 19.
function isTeenager(age){
    return age >= 13 && age <= 19;
}

// Create a function fahrenheitToCelsius that converts Fahrenheit to Celsius.
function fahrenheitToCelsius(f){
    return (f - 32) * 5 / 9;
}

// Create a function isEmptyString that returns true if the input is an empty string.
function isEmptyString(string){
    return string.length === 0;
}

// Write a function getMax that returns the larger of two numbers.
function getMax(a, b) {
    return a > b ? a : b;
  }
  

// Create a function repeatMessage that takes a message and a number and logs the message that many times.
function repeatMessage(message, number){
    for (let i = 0; i < number; i++) {
        console.log(message);
      }
}

// Write a function calculateTip that takes a bill amount and tip percentage and returns the total tip.
function calculateTip(bill,tip){
    const tipAmount = bill * (tip / 100);
    return bill + tipAmount;
}

// Create a function isPositiveNumber that returns true if the input number is greater than 0.
function isPositiveNumber(num){
    return num > 0
}

// Write a function fullName that takes first, middle, and last name and returns them as one string.
function fullName(first,middle,last){
    return `${first} ${middle} ${last}`
}

// Create a function defaultHello that logs "Hello, world!" if no name is provided, but "Hello, [name]!" if one is.
function defaultHello(name){
    return name ? `Hello, ${name}!` : "Hello, world!";}

// Write a function calculator that takes 3 arguments: num1, num2, and an operator (e.g., "add", "subtract") and performs the appropriate operation.
function calculator(num1, num2, op) {
    if (op === "add") {
      return num1 + num2;
    } else if (op === "subtract") {
      return num1 - num2;
    } else if (op === "multiply") {
      return num1 * num2;
    } else if (op === "divide") {
      return num1 / num2;
    } else {
      return "Invalid operator";
    }
  }
  
// Create a function capitalizeFirstLetter that takes a word and returns it with the first letter capitalized.
function capitalizeFirstLetter(word){
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      
}

