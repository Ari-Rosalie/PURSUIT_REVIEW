// Basic If/Else Questions
// Write an if statement that logs "Good morning!" if the variable hour is less than 12, otherwise log "Good afternoon!".
let hour = 8
if(hour < 12) {
    console.log("Good Morning");
} if(hour >= 12) {

    console.log("Good afternoon")
} 

console.log(hour)

// Write an if/else statement that checks whether a number is positive, negative, or zero, and logs the appropriate message.
let num = 0

if( num > 0) {
    console.log("Number is positive")
} else if(num < 0) {
    console.log("Number is negative" )
} else {
    console.log("Number is 0")
}
console.log(num)
// Given a variable temperature, write an if/else if/else statement that logs:

// "It's cold" if the temperature is below 50°F,
// "It's warm" if it's between 50°F and 80°F,
// "It's hot" otherwise.
let temp = 45
if(temp < 50){
    console.log("It's cold")
} else if(temp >= 50 && temp < 80){
    console.log("It's warm")
}else {
    console.log("It's hot")
}
console.log(temp)
// Write an if statement that checks whether a variable isWeekend is true, and logs "It's the weekend!", otherwise logs "It's a weekday."
let day = "Tuesday"
if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    console.log("It's a weekday");
} else {
    console.log("It's the weekend");
}
console.log(day)
// Write a program that checks if a person is eligible to vote. A person can vote if they are 18 years or older.
let age = 21
if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}
console.log(age)

// Truthy & Falsy Questions
// What will the following code log? Explain why.


// if ("false") {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// It will log truthy since "false" is a truthy value.



// Create an if statement that checks if a variable username is not empty and logs "Welcome, [username]!", otherwise logs "Please enter a valid username.".

let username = "John"
if(username === ""){
    console.log("Please enter a valid username")
} else{
    console.log(`Welcome, ${username}!"`)
}
console.log(username)
// Given a variable value, write an if statement that logs "Truthy" if value is truthy, otherwise logs "Falsy".
let val = "helllo"
if(val) {
    console.log("Truthy")
} else{console.log("falsy")}
console.log(val)

// Use !! (double NOT) to check if a value is truthy or falsy. Log the result.


let testValue = "Hello, world!";
console.log(!!testValue);


// Write an if statement that checks whether a variable myNumber is not a number (NaN) using isNaN(), and logs "Invalid number" if true.

let myNumber = "hello"; // Try different values

if (isNaN(myNumber)) {
    console.log("Invalid number");
} else {
    console.log("Valid number");
}

console.log(myNumber)


// Logical Operators Questions (&&, ||, !)
// Given isSunny and isWeekend, write an if statement that logs "Go to the beach!" if both are true. Otherwise, log "Stay at home."

let isSunny = true;   
let isWeekend = true; 

if (isSunny && isWeekend) {
    console.log("Go to the beach!");
} else {
    console.log("Stay at home.");
}

// Given hasUmbrella and isRaining, write an if statement that logs "You are prepared!" if the person has an umbrella or if it's not raining.

let hasUmbrella = false
itsRaining = true
if (hasUmbrella || !isRaining) {
    console.log("You are prepared!");
} else {
    console.log("You are not prepared.");
}


// Rewrite the following code using the ternary operator (? :):


// let age = 20;
// let message;

// if (age >= 18) {
//   message = "You are an adult.";
// } else {
//   message = "You are a minor.";
// }

let eda = 20;
let message = eda >= 18 ? "You are an adult" : "You are a minor";
console.log message;




// console.log(message);
// Given a boolean variable isMember, write an if/else statement that logs:

// "You get a discount!" if the user is a member.
// "No discount available." otherwise.


let isMember = true;
if(isMember){
    console.log("You get a discount")
} else{
    console.log("No discount available")
}


