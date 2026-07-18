# JavaScript Keywords

## What are Keywords?

**Keywords** are reserved words in JavaScript that have a special meaning to the language. They are part of the language syntax and **cannot be used as identifiers** (variable names, function names, or label names) in your code.

For example, you **cannot** do this:

```js
let if = 10;       // ❌ SyntaxError — `if` is a keyword
let return = "hi"; // ❌ SyntaxError — `return` is a keyword
const function = 5; // ❌ SyntaxError — `function` is a keyword
```

Keywords tell the JavaScript engine what to do — they control **flow**, **declarations**, **loops**, **error handling**, and more.

---

## Full List of JavaScript Reserved Keywords

### 1. Control Flow

| Keyword | Description |
|---------|-------------|
| `if` | Execute a block if a condition is true |
| `else` | Execute a block if the `if` condition is false |
| `switch` | Evaluate an expression against multiple cases |
| `case` | A specific match inside `switch` |
| `default` | The fallback case inside `switch` |
| `break` | Exit a loop or `switch` statement |
| `continue` | Skip to the next iteration of a loop |
| `return` | Exit a function and optionally return a value |

### 2. Loops

| Keyword | Description |
|---------|-------------|
| `for` | Create a loop with initialization, condition, and increment |
| `while` | Loop while a condition is true |
| `do` | Execute a block once, then loop while a condition is true |

### 3. Variable & Function Declarations

| Keyword | Description |
|---------|-------------|
| `var` | Declare a function-scoped variable |
| `let` | Declare a block-scoped variable (ES6) |
| `const` | Declare a block-scoped constant (ES6) |
| `function` | Declare a function |
| `class` | Declare a class (ES6) |

### 4. Error Handling

| Keyword | Description |
|---------|-------------|
| `try` | Start a block to test for errors |
| `catch` | Handle an error thrown in `try` |
| `finally` | Execute after `try` / `catch` regardless of outcome |
| `throw` | Throw a custom error |

### 5. Object & Value Keywords

| Keyword | Description |
|---------|-------------|
| `this` | Reference to the current execution context |
| `new` | Create an instance of a user-defined object |
| `super` | Call parent class constructor or method (ES6) |
| `delete` | Delete a property from an object |
| `typeof` | Return the data type of a value |
| `instanceof` | Check if an object is an instance of a constructor |
| `void` | Evaluate an expression and return `undefined` |
| `in` | Check if a property exists in an object |

### 6. Iteration & Module Keywords

| Keyword | Description |
|---------|-------------|
| `of` | Used with `for...of` to iterate over iterable values (ES6) |
| `in` | Used with `for...in` to iterate over object keys |
| `import` | Import modules (ES6) |
| `export` | Export modules (ES6) |
| `from` | Specify module source in `import` |

### 7. Other / Utility Keywords

| Keyword | Description |
|---------|-------------|
| `with` | Extend the scope chain (deprecated / strict-mode forbidden) |
| `debugger` | Invoke the debugger (if available) |
| `async` | Declare an async function (ES8) |
| `await` | Wait for a Promise to resolve (ES8) |
| `yield` | Pause/resume a generator function (ES6) |

---

## Reserved Literals (Also Keywords)

These are **not** keywords in the traditional sense, but they are **reserved words** that you cannot use as identifiers:

| Literal | Description |
|---------|-------------|
| `true` | Boolean `true` value |
| `false` | Boolean `false` value |
| `null` | Represents "nothing" or "empty" |

---

## Future Reserved Keywords (ES3 / Strict Mode)

These were reserved for future use in older ECMAScript specs. Some are still reserved:

`abstract`, `boolean`, `byte`, `char`, `double`, `enum`, `final`, `float`, `goto`, `implements`, `int`, `interface`, `long`, `native`, `package`, `private`, `protected`, `public`, `short`, `static`, `synchronized`, `transient`, `volatile`

> ⚠️ Most of these are only reserved in **strict mode** or are no longer enforced — but avoid using them anyway to ensure compatibility.

---

## Quick Summary

| Category | Count | Examples |
|----------|-------|---------|
| Control flow | 8 | `if`, `else`, `switch`, `break`, `return` |
| Loops | 3 | `for`, `while`, `do` |
| Declarations | 6 | `var`, `let`, `const`, `function`, `class` |
| Error handling | 4 | `try`, `catch`, `finally`, `throw` |
| Object / value | 9 | `this`, `new`, `typeof`, `delete`, `instanceof` |
| Iteration / modules | 5 | `import`, `export`, `of`, `from` |
| Other | 4 | `async`, `await`, `yield`, `debugger` |
| Reserved literals | 3 | `true`, `false`, `null` |
| **Total** | **~42** | |

---

## Key Rule

> **You cannot use a keyword as a variable name, function name, or identifier.**

✅ `let age = 25;`  
❌ `let let = 25;`  
✅ `function run() {}`  
❌ `let function = "x";`
