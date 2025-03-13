# Evaluating Expressions

In JavaScript, expressions return values, while statements execute actions. Understanding expressions is key to writing efficient and predictable code.

## Expressions vs. Statements

- **Statements** perform actions but don’t return values. Example: `if` statements.
- **Expressions** return values and can be stored in variables. Example:

```js
let sum = 15 + 30; // sum holds 45
```

## Unexpected Return Values

### Assignments as Expressions
Assignment operations return the assigned value:

```js
const soda = ["Sprite", "Pepsi"];
console.log((soda[2] = "Dr. Pepper")); // Logs: "Dr. Pepper"
```

This can lead to unintended behavior:

```js
const soda = ["Sprite", "Pepsi"];
if ((soda[soda.length - 1] = "Dr. Pepper")) {
  console.log("Dr. Pepper is the last item in the list.");
}
```

Since `=` returns a truthy value, the condition evaluates to `true`, executing the block. A correct approach would be using `===`.

## Common Methods and Return Values

### Increment and Decrement Operators

Postfix `++` and `--` return the previous value:

```js
let count = 3;
let result = count++;
console.log(result); // 3
console.log(count); // 4
```

Prefix `++` and `--` return the updated value:

```js
let count = 3;
let result = --count;
console.log(result); // 2
console.log(count); // 2
```

### Array Methods

- `.push()` and `.unshift()` return the new array length.
- `.pop()` and `.shift()` return the removed item.

```js
const sodas = ["Sprite", "Pepsi"];
console.log(sodas.push("Coca-Cola")); // 3
console.log(sodas.shift()); // "Sprite"
```

Capturing `.pop()` return values can be useful:

```js
function removeLastSoda(sodas) {
  const removed = sodas.pop();
  console.log(`${removed} was removed from the list.`);
  return sodas;
}
```

## Accessing Nested Values

Deeply nested values require careful access:

```js
const sodas = [
  { name: "Dr. Pepper", rating: 3 },
  { name: "Sprite", rating: 4 },
];
```

Accessing the `name` property of the second soda:

```js
let sprite = sodas[1].name;
console.log(sprite); // "Sprite"
```

## Interpolated Keys

Object keys can be dynamically accessed using variables:

```js
const key = "name";
console.log(sodas[0][key]); // "Dr. Pepper"
```

**Incorrect approach:**

```js
console.log(sodas[0].key); // undefined
```

Dot notation does not evaluate variables—use bracket notation instead.

---

Understanding return values and accessing deeply nested properties are fundamental to writing reliable JavaScript code.

## lesson link

[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/evaluating-expressions/readme.md]