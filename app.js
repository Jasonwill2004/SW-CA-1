// Express server created with prompt: "Create a basic Express server that listens on port 3000,
// includes a root route ('/') returning a welcome message, and an additional route
// '/products' that returns a JSON array. Keep implementation minimal and readable."

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route — returns plain text welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the assessment API!');
});

// Additional API route returning a JSON array
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

// Handle listen errors (e.g., EADDRINUSE) more gracefully so the process exits with
// a helpful message instead of an uncaught exception.
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Another process may be running.`);
    console.error('If this is unexpected, find and stop that process or change PORT.');
    process.exit(1);
  }
  console.error('Server error:', err);
  process.exit(1);
});

// Graceful shutdown on SIGINT
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

// Export server for use in tests that may require shutting it down
module.exports = server;
