# Introduction to JavaScript

JavaScript is a powerful and beginner-friendly programming language that makes webpages interactive. For example, when you add items to an online shopping cart, JavaScript powers that functionality.

## Learning Objectives
- Understand basic JavaScript syntax.
- Implement the five common primitive data types: numbers, strings, booleans, undefined, and null.
- Use JavaScript operators and variable declarations.
- Determine data types using `typeof`.

## Syntax Basics
Computers require precise syntax. Incorrect syntax leads to errors. Here are common JavaScript characters:

| Name            | Character |
|----------------|-----------|
| Single quote   | `'`       |
| Double quote   | `"`       |
| Backtick       | `` ` ``   |
| Plus          | `+`       |
| Minus         | `-`       |
| Multiply      | `*`       |
| Divide        | `/`       |
| Modulo        | `%`       |
| Parentheses   | `()`      |
| Brackets      | `[]`      |
| Curly braces  | `{}`      |
| Semi-colon    | `;`       |
| Colon         | `:`       |
| Not           | `!`       |

## Primitive Data Types
### Numbers
```js
42; -42; 42.22; 1_000_000; // Readable large numbers
2 + 2; 10 * (100 / 5) + 20 - 178 ** 1; // Math operations
5 % 2; // Modulo
"puppies" * 5; // NaN (Not a Number)
```
### Strings
```js
'Hello, world!'; "Hello, world!";
"Hello," + " world!"; // Concatenation
`Hello, ${"world"}!`; // String interpolation
```
### Booleans
```js
true; false;
if (true) { console.log("This runs"); }
```
### Undefined & Null
- `undefined`: A variable without an assigned value.
- `null`: Explicitly represents no value.

## Variables
Variables store values for later use.
```js
const myString = "my string"; // Value does not change
let myNumber = 42; // Value may change
let myBoolean = true;
```
### Console Output
```js
console.log("Hello, world!");
console.log(myString, myNumber, myBoolean);
```
## Using Variables
```js
let myNumber = 42;
console.log(myNumber * 2); // 84
myNumber += 1; // Increment
myNumber -= 7; // Decrement
console.log(myNumber);
```
## Comparisons
| Comparison        | Symbol |
|------------------|--------|
| Greater than     | `>`    |
| Less than        | `<`    |
| Equal (strict)   | `===`  |
| Not equal (strict) | `!==` |
```js
console.log(42 === "42"); // false
console.log(42 == "42"); // true (loose equality)
```
### Boolean Logic
```js
console.log(!myBoolean); // Negation
```
### Checking Data Types
```js
console.log(typeof myString); // "string"
console.log(typeof myNumber); // "number"
console.log(typeof myBoolean); // "boolean"
