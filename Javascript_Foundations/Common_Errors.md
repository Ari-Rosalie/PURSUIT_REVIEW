# Common Errors

Part of being a developer is encountering and fixing errors. While errors can be frustrating, they provide valuable information to help you solve problems. Understanding common error types will make debugging easier.

## Learning Objectives

By the end of this lesson, you should be able to:

- Read a stack trace to locate errors.
- Identify and fix syntax errors.
- Identify and fix reference errors.
- Identify and fix type errors.

---

## Understanding the Stack Trace

When an error occurs, a **stack trace** appears, showing where the error happened and what code was executed before it. This can look overwhelming at first, but it contains useful information.

Example:

```
TypeError: console.lg is not a function
    at listCharacters (/home/runner/index.js:15:13)
    at /home/runner/index.js:20:1
    at Script.runInContext (vm.js:130:18)
```

Key details:

1. **Error type**: `TypeError`
2. **Cause**: `console.lg` is not a function (likely a typo of `console.log`)
3. **Location**: `index.js`, line `15`, character `13`

The stack trace helps pinpoint where an error occurs so you can fix it efficiently.

---

## Syntax Errors

**Syntax errors** occur when JavaScript cannot understand your code. These usually happen due to missing or misplaced symbols.

Example:

```js
const game = `name: "Super Mario Galaxy",
  developers: ["Nintendo", "MORE"],
  rating: 4.8,`;
console.log(game
//> SyntaxError: missing ) after argument list
```

Fix: Add the missing closing `)` in `console.log(game)`.

Another example:

```js
if (game === 'Super Mario Galaxy')
  console.log(game);
} else {
  console.log('please choose another game);
};

//> SyntaxError: Unexpected token '}'
```

Fix: Ensure that brackets `{}` are correctly paired and that the string is properly closed.

---

## Reference Errors

A **ReferenceError** occurs when trying to use a variable or function that does not exist.

Example:

```js
function getRatingDescription(gameName, gameRating, maxRating) {
  return `${gameName}: ${gameRating} out of ${maxRating}.`;
}

getRatingDescrption("Super Mario Galaxy", ["Nintendo", "MORE"], 4.8);
//> ReferenceError: getRatingDescrption is not defined
```

Fix: The function name is misspelled (`getRatingDescrption` instead of `getRatingDescription`). Correct the spelling.

---

## Type Errors

A **TypeError** happens when a method is used on the wrong data type.

Example:

```js
console.log((5.555555).toFixed(2)); // Works fine
```

But this will cause an error:

```js
const javaScript = "JavaScript";
console.log(javaScript.toFixed(2));
//> TypeError: "JavaScript".toFixed is not a function
```

Fix: `toFixed()` works only on numbers, not strings. Ensure the variable type is correct before calling methods.

---

Understanding these common errors will make debugging much easier. Always read the error messages carefully—they often tell you exactly what went wrong and where!


lesson link###

[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/common-errors/readme.md]