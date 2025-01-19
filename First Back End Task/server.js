// Express ko import karna
const express = require('express');
const app = express();
const port = 3000;

// JSON request body ko parse karne ke liye middleware
app.use(express.json());

// Route 1: GET /hello
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Route 2: GET /greet/:name
app.get('/greet/:name', (req, res) => {
  const name = req.params.name; // URL se name parameter lena
  res.send(`Hello, ${name}!`);
});

// Route 3: POST /echo
app.post('/echo', (req, res) => {
  const data = req.body; // Request body se data lena
  res.json(data); // Wahi data JSON format mein wapas bhejna
});

// Server ko start karna
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
