# SW-CA-1

This project is a minimal Node.js + Express server created for the assessment.

## Features

- Runs on http://localhost:3000 (default)
- Root route (`/`) returns a welcome message (plain text)
- API route `/products` returns a JSON array

## Quick start (macOS / zsh)

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
# or: node app.js
```

Open these in the browser to verify manually:

- http://localhost:3000/
- http://localhost:3000/products

## Copilot prompts & outputs (before / after)

Below I show the first Copilot suggestion (Before) and the final, refined code (After). This documents how I guided Copilot and improved the output.

### Before (first Copilot suggestion)

This was the minimal initial suggestion I asked for (a tiny Express app with two routes). It reflects the "first Copilot suggestion" style used during development.

```js
// Very small initial suggestion (example)
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Welcome'));
app.get('/products', (req, res) => res.json([{ id: 1, name: 'Widget' }]));
app.listen(3000);
```

### After (refined code produced and used in this repo)

After refining prompts I asked Copilot (and edited the result) to produce the final `app.js` used in this repo. Key improvements: a clear welcome message, a 3-item `products` array, export of the server instance, and robust error handling / graceful shutdown.

```js
// Excerpt of the final app.js (shortened for README)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the assessment API!');
});

app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Widget', price: 9.99 },
    { id: 2, name: 'Gadget', price: 19.99 },
    { id: 3, name: 'Doohickey', price: 4.99 }
  ];
  res.json(products);
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

// Error handling + graceful shutdown added in refinement
server.on('error', (err) => { /* EADDRINUSE friendly message */ });
process.on('SIGINT', () => { /* graceful close */ });
```

## Approach — how I guided Copilot (prompts and rationale)

I used short, specific prompts and iterated on the output. The pattern:

- Start with a minimal, concrete prompt so Copilot produces a working scaffold.
- Add a test script prompt to validate the routes automatically.
- Refine the server code prompt to include error handling and graceful shutdown.

Prompts used (exact text I supplied while generating code):

- Prompt for server (initial):

  "Create a basic Express server that listens on port 3000, includes a root route ('/') returning a welcome message, and an additional route '/products' that returns a JSON array. Keep implementation minimal and readable."

- Prompt for refinement (error handling):

  "Add error handling to the server so that if port 3000 is already in use it prints a friendly message and exits, and add a SIGINT handler for graceful shutdown. Export the server instance."

Why these prompts work:

- Be specific about behavior (listen port, route names, response types).
- Ask for small, testable outputs (a single file or script) rather than vague architecture.
- When improving, state the exact problem and desired behavior (e.g., "handle EADDRINUSE").

## Files added / changed

- `app.js` — main Express server (includes prompt comment near top)
- `package.json` — scripts and dependencies
- `README.md` — this document (updated)

## Try it

Install and run as shown in Quick start above.

# SW-CA-1

This project is a minimal Node.js + Express server for the assessment.

Features:
- Runs on http://localhost:3000
- Root route (`/`) returns a welcome message (text)
- API route `/products` returns a JSON array

Quick start (macOS / zsh):

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
# or: node app.js
```

You can also open your browser and visit:

- http://localhost:3000/          (welcome message)
- http://localhost:3000/products (JSON array)

Notes:
- `app.js` contains the Express app and exports the server instance.
```
# SW-CA-1