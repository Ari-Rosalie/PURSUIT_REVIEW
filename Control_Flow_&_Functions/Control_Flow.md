# Control Flow


### Boolean operators and expressions

Booleans only have two values true or false, when combined they make expressions.

#### &&

For a written expression to be true w/ the && operator both sides of expression must be true.

```
> true && true
true

> true && false
false

> false && false
false

```


#### || Or

For an expression to be true with the or operator, one side must be true:

```
> true || true
true
> true || false
true
> false || false
false

```


### Understanding Truthy and Falsy Values in JavaScript
In JavaScript, every value is either truthy or falsy when used in a Boolean (true/false) context, such as inside an if statement.

1. What Are Falsy Values?
Falsy values are values that act like false when used in a condition. There are only six falsy values in JavaScript:

```
false      // The boolean false
0          // The number zero
""         // An empty string (single or double quotes)
null       // Represents "nothing"
undefined  // A variable with no value
NaN        // "Not-a-Number"

```

Example of Falsy Values in Action
```
if (0) {
  console.log("This won't run");
} else {
  console.log("0 is falsy!");
}
// Output: "0 is falsy!"
Since 0 is falsy, the else block runs.

```

#### What Are Truthy Values?
Truthy values are everything else that is not falsy. This means that most values in JavaScript are truthy.

Some examples:

```
true        // The boolean true
1, -1, 100  // Any number except 0
"hello"     // Any non-empty string
[]          // An empty array
{}          // An empty object
function(){} // Any function
```

Example of Truthy Values in Action
```
if ("hello") {
  console.log("This will run because 'hello' is truthy!");
}
// Output: "This will run because 'hello' is truthy!"

```
3. Why Are Truthy and Falsy Values Important?
They are useful for writing short and clean conditions in JavaScript.

Example: Checking If a Variable Has a Value
Instead of writing:

```
let name = "";

if (name !== "" && name !== null && name !== undefined) {
  console.log("Name is valid");
} else {
  console.log("Name is missing");
}
You can simply write:


if (name) {
  console.log("Name is valid");
} else {
  console.log("Name is missing");

}
```
Because JavaScript automatically treats "", null, and undefined as falsy.

4. Shortcuts Using Truthy and Falsy Values
✅ Using || (OR) to Set a Default Value

```
let username = "" || "Guest";
console.log(username); // "Guest"
Since "" is falsy, "Guest" is used instead.

```

✅ Using && (AND) for Quick Checks

```
let loggedIn = true;
loggedIn && console.log("Welcome back!");
Since loggedIn is truthy, "Welcome back!" is logged.
```

#### If and else
*** quick note else does not take a condition it will automatically handle all remaining cases
```
if (/* An expression that is evaluated as true or false. */) {
 // Do something.
} else if (/* Another expression that is evaluated to true or false. */) {
 // Do something different.
} else {
 // Do something else.
}
```

### Nested cases
```
const temperatureInFahrenheit = 29;
if (temperatureInFahrenheit < 68) {
  console.log("It's so cold out!");
  if (temperatureInFahrenheit < 32) {
    console.log("I mean, REALLY cold out!");
  }
} else {
  console.log("It's nice and warm out!");
  if (temperatureInFahrenheit > 78) {
    console.log("Well, maybe a bit too warm!");
  }
}
```

### Ternary Operator (? :)

The ternary operator in JavaScript is a shorthand way to write an if-else statement in a single line. It follows this syntax:
```
condition ? expressionIfTrue : expressionIfFalse;
```

Example:
```
let num = 5;
let result = num > 0 ? "Positive" : "Not positive";
console.log(result); // Output: "Positive"
```

How It Works:
If num > 0 is true, "Positive" is assigned to result.
If num > 0 is false, "Not positive" is assigned instead.




[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/control-flow/readme.md]