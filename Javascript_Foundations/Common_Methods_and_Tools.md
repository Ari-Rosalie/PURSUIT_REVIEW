# Common Methods and Tools

## Introduction

JavaScript has many built-in methods that simplify common coding tasks, such as converting strings to numbers, modifying arrays, and changing text formats. Instead of reinventing solutions, developers use these built-in tools to write more efficient code.

> **Note**: When a function belongs to an object, it is called a `method`. Methods use dot notation like `.toUpperCase()`, while standalone functions are written as `Math.random()`.


---

## Number Methods

### `Number()`
Converts a string to a number:

```js
let myNumber = "33";
myNumber = Number(myNumber);
console.log(myNumber, typeof myNumber);
```

### `Math.random()`
Generates a random number between 0 and 1:

```js
console.log(Math.random());
```

To get a random integer between two values:

```js
function getRandomInt(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInt());
```

---

## String Methods

### `.toUpperCase()`
Converts all letters in a string to uppercase:

```js
const text = "hello world";
console.log(text.toUpperCase()); // "HELLO WORLD"
```

### `.replace()` and `.replaceAll()`
Replaces parts of a string:

```js
let phrase = "To be or not to be";
phrase = phrase.replace("be", "code");
console.log(phrase); // "To code or not to be"
```

For replacing all occurrences:

```js
phrase = phrase.replaceAll("be", "code");
console.log(phrase); // "To code or not to code"
```

### `.split()`
Splits a string into an array:

```js
const sentence = "The quick brown fox";
console.log(sentence.split(" ")); // ["The", "quick", "brown", "fox"]
```

---

## Array Methods

### `.pop()`
Removes the last item from an array:

```js
const backpack = ["map", "tent", "flashlight"];
backpack.pop();
console.log(backpack); // ["map", "tent"]
```

### `.push()`
Adds an item to the end of an array:

```js
backpack.push("compass");
console.log(backpack); // ["map", "tent", "flashlight", "compass"]
```

### `.shift()`
Removes the first item from an array:

```js
backpack.shift();
console.log(backpack); // ["tent", "flashlight"]
```

### `.unshift()`
Adds an item to the beginning of an array:

```js
backpack.unshift("sleeping bag");
console.log(backpack); // ["sleeping bag", "tent", "flashlight"]
```

### `.slice()`
Extracts a portion of an array without modifying it:

```js
const newItems = backpack.slice(0, 2);
console.log(newItems); // ["sleeping bag", "tent"]
```

### `.splice()`
Adds or removes elements in an array:

```js
backpack.splice(1, 0, "water bottle");
console.log(backpack);
```

### `.join()`
Converts an array into a string:

```js
const words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"
```

---

## Copying and Modifying Code

- Always credit sources when copying code.
- Copy only small, relevant portions of code.
- Modify and comment on copied code to make it your own.
- Ensure you understand every line before using it.

### Lesson Link
[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/common-methods-and-tools/readme.md]