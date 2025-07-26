# 🧠 Understanding Prototypes in JavaScript

> ⚠️ **Note:** This guide is tailored for backend engineers. It focuses on prototype chaining, inheritance, and object behavior in non-DOM contexts.

---

## 📌 What is a Prototype?

In JavaScript, every object has an internal property called `[[Prototype]]` (commonly accessible as `__proto__` or `Object.getPrototypeOf()`).

This forms the basis of **prototypal inheritance**, where objects inherit properties and methods from other objects.

---

## 🏗️ Prototype Chain

When accessing a property or method:
- JavaScript first looks in the object itself.
- If not found, it traverses the prototype chain until it finds the property or reaches the end (`null`).

## 🔍 Inspecting Prototypes

| Operation                    | Description                               |
|------------------------------|-------------------------------------------|
| `Object.getPrototypeOf(obj)` | Gets the prototype of `obj`               |
| `Object.setPrototypeOf(obj, p)` | Sets prototype `p` for `obj`            |
| `obj.__proto__`              | Legacy accessor for prototype             |
| `obj.hasOwnProperty('key')`  | Checks if property is not inherited       |

---

## 🧵 Why It Matters for Backend Developers

Understanding prototypes helps with:
- Custom error types
- Extending base classes (e.g., in ORMs)
- Memory-efficient method reuse
- Understanding inheritance in libraries like **express**, **mongoose**, etc.

---

## ❗ Common Pitfalls

- **Don't** mutate built-in prototypes like `Array.prototype` or `Object.prototype`.
- **Don't** overuse inheritance — prefer composition when possible.

---

## ✅ Summary

- JS uses prototype-based inheritance, not class-based.
- Use constructor functions or `class` for reusable logic.
- Prototypes allow memory-efficient method sharing.
- Inspect the chain using `Object.getPrototypeOf()` or `__proto__`.

---

## 📚 References

- [MDN: JavaScript Prototypes]()
- [Node.js: util.inherits]()
