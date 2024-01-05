// auth-service.js
const express = require('express');
const app = express();

// Endpoint for user authentication
app.post('/authenticate', (req, res) => {
  // Your authentication logic here
  // Example: check credentials and generate a JWT token
  const token = generateToken(req.body.username);
  res.json({ token });
});

function generateToken(username) {
  // Your token generation logic here
  // Example: use libraries like jsonwebtoken to create a token
  return `GeneratedTokenFor${username}`;
}

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Authentication service running on port ${PORT}`);
});

