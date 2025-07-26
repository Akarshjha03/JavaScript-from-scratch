# 📌 JavaScript Events - Backend-Friendly Overview
> ⚠️ **Note:** This guide focuses on the backend engineer’s perspective. DOM-related events and browser-specific features like UI interactions are not covered.

---

## 🧠 What are Events?
Events in JavaScript are **signals that something has happened** in the environment where the code is running.  
In **Node.js (backend)**, events often occur due to:
- I/O operations (e.g., reading files)
- Network communication
- Timers
- Custom event triggers in your application

---

## 🧰 Core Event Types in Backend JS (Node.js)

| Event Type     | Description                                                |
|----------------|-----------------------------------------------------------|
| `data`         | Emitted when data is available (e.g., file or stream).    |
| `end`          | Indicates completion of a stream.                         |
| `error`        | Signals an error occurrence.                              |
| `connection`   | Triggered when a socket or server connection is made.     |
| `close`        | Marks closing of stream, server, or connection.           |
| `request`      | For incoming HTTP requests in servers.                    |

---

## 📦 EventEmitter Class (Node.js)
Node.js provides a built-in module called `events`.


---

### 🕰️ Timer Events
Useful for async behavior.  
| Function         | Purpose            | Backend Use? |
|------------------|--------------------|:------------:|
| setTimeout()     | Delay execution once   | ✅          |
| setInterval()    | Repeat at intervals   | ✅          |
| clearTimeout()   | Cancel setTimeout     | ✅          |
| clearInterval()  | Cancel setInterval    | ✅          |

---

### ⚙️ I/O & Network Events
Node.js is event-driven by design.  
**Example: File Stream Events**

```text
    const EventEmitter = require('events');
    const emitter = new EventEmitter();
    // Registering an event
    emitter.on('orderPlaced', (item) => {
    console.log(Order received: ${item});
    });
    // Triggering the event
    emitter.emit('orderPlaced', 'Coffee');
```


---

### 🕰️ Timer Events
Useful for async behavior.  
| Function         | Purpose            | Backend Use? |
|------------------|--------------------|:------------:|
| setTimeout()     | Delay execution once   | ✅          |
| setInterval()    | Repeat at intervals   | ✅          |
| clearTimeout()   | Cancel setTimeout     | ✅          |
| clearInterval()  | Cancel setInterval    | ✅          |

---

### ⚙️ I/O & Network Events
Node.js is event-driven by design.  
**Example: File Stream Events**
```text
    const fs = require('fs');
    const stream = fs.createReadStream('data.txt');
    stream.on('data', chunk => {
    console.log(Received ${chunk.length} bytes);
    });
    stream.on('end', () => {
    console.log('File reading completed');
    });
```


---

### ⚡ Events vs Callbacks vs Promises

| Feature   | Triggered By / Usage Style      | Examples              |
|-----------|-------------------------------|-----------------------|
| Events    | Emitter or system<br>.on() / .emit()     | Streams, HTTP         |
| Callbacks | Manual trigger<br>Function as arg        | fs.readFile()         |
| Promises  | Manual trigger<br>.then() / await        | fetch(), axios()      |

---

### 🧵 Event Loop (Brief Mention)
All event handling in JS is managed via the event loop. This mechanism ensures non-blocking execution by offloading long-running tasks and handling event callbacks asynchronously.

---

## ✅ Summary for Backend Engineers
- Understand EventEmitter for scalable backend systems.
- Learn file and network-related events.
- Use timer events (`setTimeout`, `setInterval`) wisely.
- Know the difference between events, callbacks, and promises.

---

## 📚 References
- Node.js Events Documentation
- MDN - setTimeout()

---
